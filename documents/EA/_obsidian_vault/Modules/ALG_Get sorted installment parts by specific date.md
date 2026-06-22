---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1741404
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ALG_Get sorted installment parts by specific date

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Input:

	
- InstallmentPartsToPairing collection


	
- PaymentDepositDate – deposit date of the incoming payment for which is sorting performed


Divide installment parts into groups according to same Pairing Settings:
System: 

	
- for each Installment Parts from InstallmentPartsToPairing collection finds decisive date as max (Installment Part->Installment.Due date, PaymentDepositDate).
	
- groups Installment Parts by same Pairing Settings; Pairing Settings are found for each Installment Part based on T&C code and valid from (using decisive date of Installment Part); T&C are found for each Installment Part on Product Version which is valid to decisive date for Installment part
	
- for each group Installment Parts gets Product Version->Terms and Conditions->Pairing Settings


The groups are sorted chronological according to the Installment Part->Installment.Due date of included installment parts.

Example 1:
Product has version-1 valid till 30.6.2016 and version-2 from 1.7.2016, each of them has its own Terms and Conditions.
Terms and Conditions from version-1 has two Pairing Settings (PS), PS1 valid from 1.1.1970, PS2 valid from 1.6.2016
PaymentDepositDate = 25.5.2016.
IPs in collections has installment due dates as follows: IP-0 has due date 20.5.2016, IP-1 has due date 20.6.2016, IP-2 has due date 20.7.2016, IP-3 has due date 29.7.2016. 
The system divides the IPs into three groups:
- group-0 of IPs with Terms and conditions from version-1 and PS1 has only IP-0 (decisive date = 25.5.2016)
- group-1 of IPs with Terms and conditions from version-1 and PS2 has only IP-1 (decisive date = 20.6.2016)
- group-2 of IPs with Terms and conditions from version-2 and associated PS has only IP-2 (decisive date = 20.7.2016) and IP-3 (decisive date = 29.7.2016)

Steps for each group (from the "oldies") of couples (List of installment parts, Pairing Settings):
1. A method setting is chosen from Method Type attribute of the Pairing Settings:
- for 'Standard'  it is continued with Standard priority pairing method for particular T&C
- for 'DPD'  it is continued with DPD priority pairing method for particular T&C
- for 'Highest DPD'  it is continued with Highest DPD priority pairing method for particular T&C
- for 'Highest DPD historically' it is continued with Highest DPD historically priority pairing method for particular T&C 
...passed is List of installment parts, Pairing Settings and PaymentDepositDate

2. System adds sorted installment parts to the end of the list of sorted installment part on output. 

Output:

	
- merged list of sorted installment parts

## 🔗 Connections (4)

- ← Generalization: [[Standard priority pairing method for particular T&C]]
- ← Generalization: [[DPD priority pairing method for particular T&C]]
- ← Generalization: [[Highest DPD priority pairing method for particular T&C]]
- ← Dependency: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]

## 📊 Appears In (3 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure
