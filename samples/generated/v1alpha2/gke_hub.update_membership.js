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

function main(name, updateMask, resource) {
  // [START gkehub_v1alpha2_generated_GkeHub_UpdateMembership_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Membership resource name in the format
   *  `projects/* /locations/* /memberships/*`.
   */
  // const name = 'abc123'
  /**
   *  Required. Mask of fields to update.
   */
  // const updateMask = {}
  /**
   *  Required. Only fields specified in update_mask are updated.
   *  If you specify a field in the update_mask but don't specify its value here
   *  that field will be deleted.
   *  If you are updating a map field, set the value of a key to null or empty
   *  string to delete the key from the map. It's not possible to update a key's
   *  value to the empty string.
   *  If you specify the update_mask to be a special path "*", fully replaces all
   *  user-modifiable fields to match `resource`.
   */
  // const resource = {}

  // Imports the Gkehub library
  const {GkeHubClient} = require('@google-cloud/gke-hub').v1alpha2;

  // Instantiates a client
  const gkehubClient = new GkeHubClient();

  async function callUpdateMembership() {
    // Construct request
    const request = {
      name,
      updateMask,
      resource,
    };

    // Run request
    const [operation] = await gkehubClient.updateMembership(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateMembership();
  // [END gkehub_v1alpha2_generated_GkeHub_UpdateMembership_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
