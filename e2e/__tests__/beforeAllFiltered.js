/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

import runJest from '../runJest';

describe('Correct BeforeAll run', () => {
  it('ensures the BeforeAll of ignored suite is not run', () => {
    const result = runJest('before-all-filtered');
    expect(result.stdout.replace(/\\/g, '/')).toMatchSnapshot();
  });
});
