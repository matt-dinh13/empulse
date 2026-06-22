---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing"
domain: "Requirements Model"
element_id: 1584001
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Allow Automatic FER amount calculation for nearest future installment due date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing

## 📝 Notes

Proposal of the function change

PCG: FER service setting
New attribute code: INTEREST_CALC_NEXT_DUE_DATE

CSI:
New type of INTEREST_CALC_NEXT_DUE_DATE in Contract Service Parameter Type
Calculation of Loan Service parameters:

	
- setting AUTOMATIC_FER_PROCESSING = value from Service -> Full Early Repayment Service.Automatic Service Processing; If value is NULL, set to 0 (FALSE)
	
- add setting of FER_USE_PAY_DEPOSIT_DATE in Contract Service Parameter. Value is taken from Service -> Full Early Repayment Service


Based on AUTOMATIC_FER_PROCESSING = TRUE, UC 05.184 Reflect change of balance generates event CreateFerRequestAutomaticallySE for UC 05.186 Process FER without request. There are created FER request with Checked Date = Incoming Payment.Deposit Date
New behaviour: based on FER_USE_PAY_DEPOSIT_DATE value, Deposit Date will be sent, or not sent as expected FER due date

Changes charged as CSI-434

## 📊 Appears In (1 diagrams)

- Custom: CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing
