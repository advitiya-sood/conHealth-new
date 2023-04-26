/*
  This code sample shows Custom Model operations with the Azure Form Recognizer client library. 

  To learn more, please visit the documentation - Quickstart: Form Recognizer Javascript client library SDKs
  https://docs.microsoft.com/en-us/azure/applied-ai-services/form-recognizer/quickstarts/try-v3-javascript-sdk
*/

import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";

/*
* This sample shows how to analyze a document using a model with a given ID. The model ID may refer to any model,
* whether custom, prebuilt, composed, etc.
*
* @summary analyze a document using a model by ID
*/
 export default async function model() {
  /*
    Remember to remove the key from your code when you're done, and never post it publicly. For production, use
    secure methods to store and access your credentials. For more information, see 
    https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-security?tabs=command-line%2Ccsharp#environment-variables-and-application-configuration
  */

  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "https://singhco.cognitiveservices.azure.com/";
  const credential = new AzureKeyCredential(process.env.FORM_RECOGNIZER_API_KEY || "23d8584ca7844634a2f876ee1a19456f");
  const client = new DocumentAnalysisClient(endpoint, credential);

  const modelId = process.env.FORM_RECOGNIZER_CUSTOM_MODEL_ID || "hdfc_model";

    var  resultObj={}

  let pdfLink ="https://formrecognizer12345.blob.core.windows.net/form-recognizer/statement5.pdf"

  const poller = await client.beginAnalyzeDocument(
    modelId,
    pdfLink
  );

  const {
    documents: [document],
  } = await poller.pollUntilDone();

  if (!document) {
    throw new Error("Expected at least one document in the result.");
  }

  console.log(
    "Extracted document:",
    document.docType,
    `(confidence: ${document.confidence || "<undefined>"})`
  );
  //console.log("Fields:", document.fields);
  const obj = document.fields;
  //console.log("Obj--",typeof(obj));
  // console.log(obj)

  let obj_keys=Object.keys(obj)

  //console.log(obj_keys);
  let i=0
  for (let a in obj)
  {
    // resultObj.push({sup:22})

    
    resultObj[obj_keys[i]]=obj[obj_keys[i]]['value']

    // console.log(obj_keys[i]," : ",obj[obj_keys[i]]['value']);
    i=i+1
  }
  return(resultObj)

}

model().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});