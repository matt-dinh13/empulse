---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5286 (CLM-1852) Late termination process support"
domain: "Requirements Model"
element_id: 1431830
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-5286 (CLM-1852) Late termination process support

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5286 (CLM-1852) Late termination process support

## 📝 Notes

Goal of this task is to modify the current system logic of creating a single due amount once a contract loan goes past 93 DPD in (HC India). A decision on HCIN level has been taken to change this logic. Once the contract goes past 93 DPD, instead of terminating the contract and creating a single amount due (total principle + total interest), the interest accrual on daily basis should continue in the back-end until the day customer makes the payment. For this reason, HCIN is required to change the installment plan conversion logic for paid off cases for all HCIN products.

This means that we will not pay off a loan in 93 DPD as of now. Instead, we will only mark the loan as non-performing and leave the installment schedule unchanged and give the client a chance to repay debt and get back to DPD below 93 DPD. Additional penalties may be charged.

If the client exceeds some limit (details in A4), we will agree with a client on the form of repayment (e.g. the 'shots' mentioned in the A4). This is, however, only agreement between a client and HCIN Collections, the installment schedule in primary systems remains untouched. If the client keeps to their promises, a part of their debt may be waived via Deficits and Damages payment. Charging of penalties will be stopped during this special period.

In case a client breaks the agreement with HCIN Collections, all the penalties will be charged in BSL retroactively (e.g. also to the past) and a standard collection process is retained.

Installment schedule may still be paid off later on, after certain conditions are fulfilled.

## 🔗 Connections (3)

- ← Generalization: [[DEV CLM CBL-5286 Late termination process support]]
- ← Generalization: [[DEV Add payment channel to PaymentManagementWS.createPayment]]
- ← Generalization: [[DEV ISPAY CBL-5286 Late termination process support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-5286 (CLM-1852) Late termination process support
