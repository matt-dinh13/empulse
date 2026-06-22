---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1879052
diagrams: 5
connections: 7
tags:
  - requirement
  - modules
---

# 📋 {MOD}Fees calculation

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

This algorithm calculates amounts of fees, which were selected and ordered by the rule Fees determination.

System calculates amounts of fees in the required order:

	
- System takes all nodes that have no incoming and no outgoing edge(s). System calculates values of fees from the sets representing the nodes (according to below mentioned rules). System removes the nodes from the graph.
	
- System takes all nodes that have no outgoing edge(s). System calculates values of fees from the sets representing the nodes (according to below mentioned rules). System removes all incoming edges of such nodes from the graph. System removes the nodes from the graph. This whole sub-step is done until there are any nodes remaining in the graph.


Particular fee is calculated based on its type (fee type is determined as described in the first step):
- for monthly fees using Monthly fees amount definition (with Product->Tariff as input),
- for origination fees using Origination fees amount definition (with Product->Tariff as input),
- for one time in first installment fees using In first installment fees amount definition (with Product->Tariff as input),
- for service insurance fees using Service fees amount definition (with InsuranceService->Service and InsuranceService->Service->Tariff, InsuranceService.EstimatedFirstPeriodStart and InsuranceService.EstimatedFirstPeriodEnd as inputs)
- for service non-insurance fees using Service fees amount definition (with Product->Tariff as input)

Specifics for fees 

	
- with PercentageBasedOn = WPI (Whole principal without insurance)
	
- with PercentageBasedOn = SI (Sum Insured) if the Sum Insured is defined with PercentageBasedOn = WPI

Fees with this base must be calculated as the last, i.e. they are excluded from the standard fee calculation sequence and then calculated separately (they can depend on another fees). Calculated fee is added to the list of fees assigned to Offer Financial Parameters.
{ADD PCG-5310}PH only:
fee with PercentageBasedOn = IPINS (Interest of Previous Installment) is not calculated in this step.{/ADD}

## 🔗 Connections (7)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[In first installment fees amount definition]]
- → Dependency: [[Service fees amount definition]]
- → Dependency: [[Monthly fees amount definition]]

## 📊 Appears In (5 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
