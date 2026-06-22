---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF"
domain: "Analysis Model"
element_id: 1820764
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Repayment method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF

## 📝 Notes

Type (name) of the repayment method (i.e. type of the repayment payment channel).

When switch enableDDMSourceAndType = true and Direct debit is selected, then system triggers Zeebe process to get {ADD LOR-10270}list of{/ADD} DDM based on Initial CUID/CUID. Based on the Zeebe response, system sets field Source:

	
- If no DDM was returned, then field values is NEW and field is disabled.
	
- If {ADD LOR-10270}any{/ADD} DDM is received, then field is enabled.


Other:

	
- Enumeration values are taken from the Payment Channel Type (ordered by .Name ASC) and filtered according to the rule Get allowed repayment methods for application.
	
- If there is more than one allowed repayment method for the application, then the default value can be possibly defined by the application-form-specific parameter defaultPaymentChannel. Otherwise empty by default (when no value is available on the respective payment channel yet).


LDM:

	
- //LDM source for field pre-filling
GetPaymentChannelResponse.paymentChannels[.purpose='RE'].type
	
- //LDM for value saving
CreatePaymentChannelDraftRequest[.purpose='RE'].type / 
UpdatePaymentChannelOrDraftRequest[.purpose='RE'].type


Localization code:
CON_RepaymentMethod

## 🔗 Connections (4)

- ← Generalization: [[Repayment method (GUIElement 1685979)]]
- ← Generalization: [[Repayment method (GUIElement 1686024)]]
- ← Generalization: [[Repayment method (GUIElement 1820748)]]
- → Dependency: [[Get allowed repayment methods for application]]

## 📊 Appears In (1 diagrams)

- Custom: Way of repayment - product AF
