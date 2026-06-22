---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822805
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Validation rules for AF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Two levels of validations are performed during AF filling:
1) Field level validation - format (allowed characters, date format) and length of input are validated for every field after it's been filled-in and exited.
2) Form level validation - at the end of form filling (when user submits the form), all logical and cross-validations for all elements on the form are performed.

Besides regular validations, system supports so called warnings (or raising warnings). For these, a logical check is always performed when a particular field is exited. When the check fails, a warning is risen (indicated in GUI). Warnings notify user about problems occurring during data filling, such as suspicious combinations of address components (contrary to code list), etc.. Warnings are meant to bring operator’s attention to possible mistyped or incorrectly entered data, but don’t prevent him from continuing with form filling or sending data for approval.

ad 2: If an validation (not warning, these are handled separately) check fails, fields containing invalid values are marked. User can directly navigate from the list of all errors to particular fields.

## 🔗 Connections (2)

- ← Dependency: [[Product AF]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Use Case: Fill in application
