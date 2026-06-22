---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS"
domain: "Requirements Model"
element_id: 1743957
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2364 Changes in Contract Insurance on COP application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS

## 📝 Notes

Behaviour of the VAS (insurance) fee on COP application when the VAS fee is to be refunded on VAS cancellation

	
- System should calculate the customer outstanding / demand (COP amount) as below:

        ‘Loan Amount – VAS Fee’ = INR 100,000 – INR 3000 = INR 97,000

	
- Customer is expected to re-pay INR 97,000 and account is repaid by pairing INR 97K.


A new COP_CANCEL_INSURANCE Contract Service Parameter will be created to inform COP execution functionality if VAS amount should be deducted or not on COP evaluation.

## 📊 Appears In (1 diagrams)

- Custom: CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS
