---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25867 (CSI-3602) Removal of fee after contract service termination"
domain: "Requirements Model"
element_id: 1876169
diagrams: 7
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get Tariff Items used for a Service fees

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25867 (CSI-3602) Removal of fee after contract service termination

## 📝 Notes

This rule describes how to get tariff items used for charging a fee (or fees) to the processed contract service. Rule modification due to reuse it for Service fee generally (originally named "Get Tariff Items used for Insurance premium")
Input:

	
- ContractService ->ContractInsuranceService


Output:

	
- OriginalFeeAmountInPrincipal


	
- OriginalMonthlyFee
	
- OriginalFeeAmountNotInPrincipal
	
- TariffItemsId[] - array of Tariff Items used to insurance premium calculation


Steps:

	
- For the chosen ContractService->ContractInsuranceService related to the processed Contract
- get Tariff Item used for the processed Contract Service by calculated Financial Parameters Items (i.e. Contract Service -> FP Service Tariff Item ->Tariff Item)
	
- If a Tariff Item is found, get only FP Service Tariff Items (FPTI) of searched fees (i.e. FPTI having Tariff Item Type with Tariff Item Usage = S(Service)) and set its Tariff Item.ID into TariffItemsId[]
	
- Group the Tariff Items from FPTI by usage as follow:
- OriginalFeeAmountInPrincipal (i.e. Tariff Item Type.Flag Type = TO_PRINCIPAL and Tariff Item Type.Charging Periodicity = ONE_TIME -- i.e. charged insurance fees which increase ProvidedCreditAmount
- OriginalFeeAmountNotInPrincipal -  (i.e. Tariff Item Type.Flag Type <> TO_PRINCIPAL and Tariff Item Type.Charging Periodicity = ONE_TIME -- i.e. charged insurance fees which NOT increase ProvidedCreditAmount
- OriginalMonthlyFee (Tariff Item Type.Charging Periodicity = IN_INSTALLMENT and Tariff Item Type.Flag Type != TO_PRINCIPAL) -- i.e. all fees charged into the contract installments
- other setting of tariff item types is not taken into account

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Calculate new installment amount on service termination]]
- ← Dependency: [[Recalculate Financial Parameters on Service cancellation]]
- ← Dependency: [[Calculate new installment amount on insurance cancellation]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination
- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
- Use Case: Cancellation of Insurance contract options
- Use Case: Contract insurance cancellation
- Use Case: Contract insurance termination
- Use Case: Service - Contract Service management via UI
- Use Case: Termination of Insurance contract options
