---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-5043 (CBL-18002) - Pay-off refactoring"
domain: "Requirements Model"
element_id: 1835148
diagrams: 6
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Calculate pay-off installment date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-5043 (CBL-18002) - Pay-off refactoring

## 📝 Notes

This algorithm is used to find pay-off date for given contract
Input:
- Contract
- PayoffReason
- RequiredDate
{ADD CLM 5124}
- TargetContractStatus - L in case of plain pay off or H in case of pay off as part of write off{/ADD}

Output:
- Pay-off installment date (POID)

Steps:
1. If PayoffReason is not found in Contract.FinancialParameters.ProductVariant.Product.TermsAndConditions.Pay-off date calculation parameter then find the record marked as default in the same entity.
Then read corresponding Pay-off Date Calculation Type (PODCT).

2. For any PODCT check if a next installment is available; i.e. Select all installments (I) assigned to contract from input  where I.Active = TRUE and I.InstallmentType = 'STANDARD' and I.DueDate >= check date;
where check date is taken as follow:
- If PODCT = REQ_DATE then check date = RequiredDate from input
- for other PODCT setting check date =current date
If no installment is found then return information that POID cannot be calculated.

3. If PODCT = CURR_DATE then set POID = current date

4. If PODCT = NEXT_INST then POID is calculated as follows:
b) POID = minimal due date from installments found in step #2

5. If PODCT = REQ_DATE then POID = RequiredDate from input

## 🔗 Connections (2)

- ← Dependency: [[{MOD}03.120 Pay off installment schedule]]
- ← Dependency: [[01.502 Pay-off CEL contract (UseCase 1878665)]]

## 📊 Appears In (6 diagrams)

- Custom: CLM-5043 (CBL-18002) - Pay-off refactoring
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay-off CEL contract
- Use Case: Pay-off contracts from external system
