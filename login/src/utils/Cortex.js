/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * This is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this license. If not, see
 *
 *     https://www.gnu.org/licenses/
 *
 *
 */

const Config = require('Config');

function cortexFetch(input, init) {
  return fetch(`${Config.cortexApi.path + input}`, init)
    .then((res) => {
      if (res.status === 504 || res.status === 503) {
        if (window.location.href.indexOf('/maintenance') === -1) {
          window.location.pathname = '/maintenance';
        }
      }
      return res;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.message);
    });
}

export default cortexFetch;
