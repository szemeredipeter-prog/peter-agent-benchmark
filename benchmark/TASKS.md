# Benchmark Tasks

## TASK-A — Health Endpoint

Add a `GET /health` capability that returns:

```json
{
  "status": "ok",
  "version": "<current application version>"
}
```

Add automated tests.

Keep the implementation minimal.

## TASK-B — Configuration Validation

Add explicit validation for application configuration.

Required behavior:

- missing required values produce a deterministic validation error;
- valid configuration is accepted;
- automated tests are added.

Do not change unrelated application behavior.

## TASK-C — Diagnose and Fix Regression

This task is intentionally reserved for a later benchmark run.

The benchmark operator will introduce or select a failing math-related test.

Diagnose the actual cause and fix the smallest appropriate implementation defect.

Do not rewrite unrelated code.

## TASK-D — Review-Driven Refactor

Refactor code only in response to human review feedback supplied during the benchmark.

Requirements:

- preserve observable behavior;
- update/add tests only where justified;
- make only changes requested by the review;
- perform no unrelated cleanup.
