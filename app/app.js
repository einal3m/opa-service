const express = require("express"); // Express.js
const axios = require("axios"); // Axios is middleware that handles async requests

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 80;
app.listen(port, () => {
  console.log("App is running on port: " + port);
});

// Router for /health endpoint.
app.get("/health", function (req, res, next) {
  res
    .status(200)
    .send(
      "Welcome to the OPA App. Please make GET policy requests using /allow endpoint."
    );
});

// Router for /allow endpoint.
app.get("/allow", async (req, res) => {
  let userId = req.body.userId;
  let action = req.body.action;
  let resource = req.body.resource;
  let type = req.body.type;

  let requestData = {
    input: { action: action, userId: userId, type: type },
  };

  // Make HTTP Request to Policy Service (OPA) with Request Data
  let policyServiceURL = `http://opa:8181/v1/data/${resource}/allow`;
  const policyServiceRequest = async () => {
    try {
      const policyResponse = await axios.post(policyServiceURL, requestData);
      return policyResponse.data.result;
    } catch (err) {
      console.error(err);
    }
  };

  // After evaluation, return Policy Decision to the user.
  let policyServiceResult = await policyServiceRequest();

  if (policyServiceResult) {
    res
      .status(200)
      .send(
        `Policy Decision: ${policyServiceResult}. User "${userId}" IS allowed to ${action} a ${type}`
      );
    return;
  } else if (!policyServiceResult) {
    res
      .status(401)
      .send(
        `Policy Decision: ${policyServiceResult}. User "${userId}" NOT allowed to ${action} a ${type}`
      );
    return;
  } else {
    res
      .status(500)
      .send(
        "Policy Decision: " +
          policyServiceResult +
          ". Policy Service (OPA) unreachable or malformed response."
      );
    return;
  }
});
module.exports = app;
