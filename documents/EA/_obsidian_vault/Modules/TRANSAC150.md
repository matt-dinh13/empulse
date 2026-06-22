---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1310053
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 TRANSAC150

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

Through this table the OBS is informed that an account transaction on contract has been performed.   

Messages TRANSAC150 are sent only upon these two events:

	
- Contract signature

        - Amount is represented with positive sign, e.g. 22840.
        - Transac150 is sent after the first Credit110 message, which is sent after the contract is signed.

	
- Contract cancellation

       -  Amount is represented with negative sign, e.g. – 22840.
       - Together with Transac150, Credit110 with status 'cancelled' and cancellation of outgoing payments (Orderpay140) should be sent.

## 🔗 Connections (5)

- → Dependency «use»: [[TRANSAC150 TransactionType]]
- → Dependency: [[CommResult]]
- ← Dependency «transformation»: [[CELPrincipalAccountTransaction]]
- ← Dependency «transformation»: [[CELInsuranceAccountTransaction]]
- ← Dependency «transformation»: [[InsuranceTransactionRequest (Class 1749966)]]

## 📊 Appears In (3 diagrams)

- Logical: Additional insurance transaction - Communication model
- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdCredit | number |  |
| SellerplaceCode | string |  |
| TransacType | TRANSAC150 TransactionType |  |
| TransValue | decimal |  |
| DateDraw | date |  |
| TimeStamp | dateTime |  |
| IdResult190 | number |  |
| ResultCode | CommResult |  |
