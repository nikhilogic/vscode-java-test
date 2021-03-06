// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { ITestItem } from '../protocols';
import { IRunnerContext } from '../runners/models';
import { runnerScheduler } from '../runners/runnerScheduler';

export async function runFromCodeLens(test: ITestItem, isDebug: boolean): Promise<void> {
    const runnerContext: IRunnerContext = {
        scope: test.level,
        testUri: test.location.uri,
        fullName: test.fullName,
        paramTypes: test.paramTypes,
        kind: test.kind,
        projectName: test.project,
        tests: [test],
        isDebug,
    };

    await runnerScheduler.run(runnerContext);
}
