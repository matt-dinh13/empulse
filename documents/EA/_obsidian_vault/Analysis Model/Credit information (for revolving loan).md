---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF"
domain: "Analysis Model"
element_id: 1720789
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Credit information (for revolving loan)

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF

## 📝 Notes

List of information (label, colon and value) about credit.
The information is taken from the offer (Offer_Financial_Parameters) with flag chosen set to 'yes'.

Credit type
LDM Source:
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product->Product_Profile.Name
Localization code: APP_CreditType

Product name
LDM Source (concatenation): 

	
- Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product.Name


	
- Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->->Product.Code in brackets

Localization code: PRD_Name

Price
LDM Source:
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Closed_End_Loan_Offer_Financial_Parameters.Price
Localization code: GEN_Price

Cash payment
LDM Source:
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Closed_End_Loan_Offer_Financial_Parameters.Cash_Payment
Localization code: PRD_CashPayment

Credit limit
LDM Source:
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Net_Credit_Limit
Localization code: CON_CreditLimit

Minimum monthly installment
LDM Source:
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Minimal_Installment_Amount
Localization code: PRD_MinMonthlyInstallment

Plus extra limit
LDM Source: Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Net_Credit_Limit - Net_Credit_Amount
Localization code: PRD_PlusExtraLimit

Charged fees &#171;grid&#187;
List of fees charged in the moment of contract origination.
List ordering: By Charged column
LDM Source: 
Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Offer_Tariff_Item
Column atributtes:

	
- Fee name - Name of the fee (Tariff Item Type.Name)
	
- Amount - Charged amount of the fee (Offer_Tariff_Item.Item Amount)


	
- Charged - Periodicity of payment determined in accordance with Tariff Item Type.Charging Periodicity setting


Services
Localization code: PRD_Services
List of services related to the contract. The list contains:

	
- Code - LDM Source: Service.Code
Implemented as a link to UC Show service information.


	
- Name - LDM Source: Service.Name

visible only if at least 1 service exists

## 📊 Appears In (1 diagrams)

- Custom: Header - product AF
