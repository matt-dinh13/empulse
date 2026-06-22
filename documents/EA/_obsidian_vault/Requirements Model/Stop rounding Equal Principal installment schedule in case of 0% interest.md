---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest"
domain: "Requirements Model"
element_id: 1336096
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Stop rounding Equal Principal installment schedule in case of 0% interest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest

## 📝 Notes

Problem:
In Equal Principal IS algorithm, when rounding an installment the rounding difference is deducted from the interest installment part. In case of 0% interest rate this leads to negative interest installment part amount and therefore to an application exception.

Example (non-zero interest rate):
Principal = 651.23 KZT
Calculated interest = 123.00 KZT
Final interest = ROUND(Calculated interest + Principal) - Principal = ROUND_HALF_UP(123.00 + 651.23) - 651.23 = 774.00 - 651.23 = 122.77 KZT

Example (0% interest rate):
Principal = 651.23 KZT
Calculated interest = 0.00 KZT
Final interest = ROUND(Calculated interest + Principal) - Principal = ROUND_HALF_UP(0.00 + 651.23) - 651.23 = 651.00 - 651.23 = -0.23 KZT => Exception

Solution:
If interest rate = 0% then do not round installments. Equal Principal algorithm is a rarely used algorithm, it's only used in KZ for legal reasons and should not be combined with 0% interest. The problematic IS is only generated during Grace period processing as a semi-product before early repayment is processed on it. Therefore the non-rounded installments will not be presented to any system or customer.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest (Requirement 1336097)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest
