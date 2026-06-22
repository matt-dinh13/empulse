---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Rewards - product AF"
domain: "Analysis Model"
element_id: 1827895
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reward payment method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Rewards - product AF

## 📝 Notes

Type of the reward payment method.

Other:

	
- Enumeration values retrieved from Reward payment method type (ordered by .Name ASC) and filtered according to the configuration of the applicable CEL_Rewards_Service (i.e. Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Offer_Service->Service->CEL_Rewards_Service) as follows:
   - If CEL_Rewards_Service.Current_Account = TRUE, then 'CURRENT_ACCOUNT' is included.
   - If CEL_Rewards_Service.Debit_Card = TRUE, then 'DEBIT_CARD' is included.
   - If CEL_Rewards_Service.Extra_Repayment_Of_Loan = TRUE, then 'EXTRA_LOAN_REPAYMENT' is included.
	
- In case the enumeration constructed this way includes exactly one available value, then such value is automatically pre-selected. Otherwise empty by default.


LDM:

	
- //LDM source for field pre-filling
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RW'].Type = PaymentChannelType and .Source_Type = PaymentChannelSourceType
  - where PaymentChannelType and PaymentChannelSourceType are got according to the rule Mapping of selected reward payment method to CEL reward payment channel attributes with respective RewardPaymentMethod on the input.
	
- //LDM for value saving
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Offer_Service[Service.Type='CELREW']->Offer_Service_Parameter[.Type='CELREW_METHOD'].Value and
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RW'].Type = PaymentChannelType and .Source_Type = PaymentChannelSourceType 
   - where PaymentChannelType and PaymentChannelSourceType are got according to the rule Mapping of selected reward payment method to CEL reward payment channel attributes with respective RewardPaymentMethod on the input.


Localization code:
APP_RewardPaymentMethod

## 🔗 Connections (3)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Reward payment method type]]
- → Dependency: [[Mapping of selected reward payment method to CEL reward payment channel attributes]]

## 📊 Appears In (1 diagrams)

- Custom: Rewards - product AF
