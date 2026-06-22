---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1741398
diagrams: 4
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 ALG_Get sorted installment parts

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

This functionality describes choosing a priority pairing method which is used to pairing incoming payments to contract installments parts and types (Principal, Monthly Fee,...).
The pairing priority is setting is kept in the Installment Priority Setting with aggregated Installment Priority entities and depends on the currently valid Pairing Settings (based on contract T&C code).
For one T&C there can be more Pairing Settings but only one of them is valid at the same time. For every Pairing Settings for TAC only one set of Installment Priorities can be set. In case of changing priorities of individual installment parts it is necessary to create a new Pairing Settings with a new set of Installment Priorities. It is not necessary to create a new Terms and Conditions for that.
Pairing priority setting can be only performed by data manipulation on basis of a business request - see Initial setting of priority pairing for countries for example.

Input:

	
- InstallmentPartsToPairing collection


	
- PaymentDepositDate – deposit date of the incoming payment for which is sorting performed


Steps:
1. A method setting is chosen from Method Type attribute of the currently valid Pairing Settings based on Terms & Conditions defined to a Product version that was used for the Contract:
- for 'Standard' it is continued with Standard priority pairing method 
- for 'DPD'  it is continued with DPD priority pairing method
- for 'Highest DPD'  it is continued with Highest DPD priority pairing method
- for 'Highest DPD historically' it is continued with Highest DPD historically priority pairing method 
...passed is List of installment parts, Pairing Settings and PaymentDepositDate
2. Function returns a list of sorted installments by chosen method

## 🔗 Connections (5)

- ← Generalization: [[DPD priority pairing method]]
- → Realisation: [[REQ1 - Pairing priority rules]]
- ← Generalization: [[Highest DPD priority pairing method]]
- ← Generalization: [[Standard priority pairing method]]
- ← Dependency: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure
