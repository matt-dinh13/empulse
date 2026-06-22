---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1842678
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 FinancingPackageCriterionValuesCombination - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules

## 📝 Notes

// Financing Package - validation of allowed combination of criterion values of selected criterion types
Only such records are taken into account from FinancingPackageCriterion in description below where Criterion.type is in [PURPOSE, TRANSACTION_TYPE].

Initialize set of verified and non verified criterions 
- CriterionOK (type, value)
- CriterionToCheck (type, value)

For each CheckedCriterion from FinancingPackageCriterion
// Check if exists allowed combination where the CheckedCriterion is included
If exists Combination in Financing Package Criterion Value Combination which contains CheckedCriterion then
- add CheckedCriterion into CriterionToCheck
- else add CheckedCriterion into CriterionOK. // criterion is not limited by any combination
Continue with the next CheckedCriterion

// Check all combinations of Criterions to Check
For each CheckedCriterion from CriterionToCheck

For each CheckedCriterionSet (= combination of CheckedCriterion with other criterions from CriterionToCheck where each criterion type is only once in the combination): 
If exists a Combination in Financing Package Criterion Value Combination which contains CheckedCriterionSet and does not contain any other criterion type which is not included into CheckedCriterionSet then
- Remove CheckedCriterion and other criterions included in CheckedCriterionSet from CriterionToCheck and put them into CriterionOK.
- Continue with the next CheckedCriterion.
Continue with the next CheckedCriterionSet.

Continue with the next CheckedCriterion

If CriterionToCheck is not empty then set error [INVALID_CRITVALUESCOMBINATION].
Else the validation is successful.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- ← Dependency: [[{MOD}Financing package - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Financing Package Values - validation rules
- Custom: Validation Rules
