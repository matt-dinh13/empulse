---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818388
diagrams: 2
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ OTP verification (for common contract signing)

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Panel containing the form for a paperless signing of the contract(s) using the OTP verification - applicable for cases, when a single (common) OTP verification shall be used for all contracts selected for the multi-contract-signing.

Visible only if all the following conditions are met:

	
- Each selected application (via ticked Contract number checkbox) is in status Approved (Contract.Status = 'S') and sub-status Prepared for sign (Contract.SubStatus = 'PS').
	
- Applicable contract signing method decided according to the rule Decide about applicable contract signing method with respective ApplicationCode (i.e. Contract.Contract_Code) on the input is 'OTP'. //Applicable for each selected application (via ticked Contract number checkbox).
	
- All commodities on each selected application (via ticked Contract number checkbox) have been successfully validated - see the 01.182 Prepare documentation manually use case for more details about the commodity validation itself.
	
- User must have clicked the Print documentation button for each selected application (via ticked Contract number checkbox).

## 🔗 Connections (1)

- → Dependency: [[Decide about applicable contract signing method]]

## 📊 Appears In (2 diagrams)

- Custom: Contract signing
- Custom: LOR-9360 Remove temporary switch useSingleOtpForContractSign
