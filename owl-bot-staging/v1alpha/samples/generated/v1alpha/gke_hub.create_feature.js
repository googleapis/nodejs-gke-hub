// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START gkehub_v1alpha_generated_GkeHub_CreateFeature_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent (project and location) where the Feature will be created.
   *  Specified in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  The ID of the feature to create.
   */
  // const featureId = 'abc123'
  /**
   *  The Feature resource to create.
   */
  // const resource = {}
  /**
   *  Optional. A request ID to identify requests. Specify a unique request ID
   *  so that if you must retry your request, the server will know to ignore
   *  the request if it has already been completed. The server will guarantee
   *  that for at least 60 minutes after the first request.
   *  For example, consider a situation where you make an initial request and
   *  the request times out. If you make the request again with the same request
   *  ID, the server can check if original operation with the same request ID
   *  was received, and if so, will ignore the second request. This prevents
   *  clients from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'

  // Imports the Gkehub library
  const {GkeHubClient} = require('@google-cloud/gkehub').v1alpha;

  // Instantiates a client
  const gkehubClient = new GkeHubClient();

  async function callCreateFeature() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await gkehubClient.createFeature(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateFeature();
  // [END gkehub_v1alpha_generated_GkeHub_CreateFeature_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
