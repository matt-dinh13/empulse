---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1879054
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Fees determination

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Selection of fee's definition (tariff item types) and checking of base types in selected definitions. 
Note: Calculation of Fee amounts is done by separate algorithm Fees calculation.

Inputs:

	
- product


	
- selected services (including insurances)
	
- Number of top up installments
	
- Tariff item limit value
	
- {ADD PCG-5620}Tariff item manual amount (tariff item type code, amount){/ADD}


Outputs:

	
- ordered list of fees


Steps:

	
- System loads fee tariff items (FTIs) using Algorithm: Find tariff items by usage with the following inputs:
- for product fees:
    -- TariffVersion = Product->Tariff (active version),
    -- Usage = 'Standard',
    -- ChargingPeriodicity in (ONE_TIME, IN_INSTALLMENT, IN_FIRST_INSTALLMENT)
- for service fees:
    -- TariffVersion = Service->Tariff (active version),
    -- Usage = 'Service',
    -- ChargingPeriodicity in (ONE_TIME, IN_INSTALLMENT, IN_FIRST_INSTALLMENT)
	
- System checks all loaded FTIs where any of attributes
- FTI.PercentageBasedOn
- FTI.LimitNumberBasedOn
- FTI.LimitAmountBasedOn
- FTI.LimitValueBasedOn
is filled by BaseType. 
Each BaseType defined for FTI is checked as follows:
- Number of terms:
   -- If ProductType not in (CEL, REL), the algorithm is terminated (the offer is invalid). 
- Whole principal:
   -- If ProductType not in (CEL, REL) and InitialTransactionType <> POS, the algorithm is terminated (the offer is invalid). 
- Whole principal without insurance:
   -- If ProductType not in (CEL, REL), the algorithm is terminated (the offer is invalid).   
   -- If FTI.TariffItemType.TariffItemTypeFlag(TO_PRINCIPAL) = False and FTI.TariffItemType.Usage <> 'SI', the algorithm is terminated (the offer is invalid).   
- Provided Credit limit:
    -- If ProductType <> REL, the algorithm is terminated (the offer is invalid). 
    -- If FTI.TariffItemType.TariffItemTypeFlag(TO_PRINCIPAL) = False and FTI.TariffItemType.Usage <> 'SI', the algorithm is terminated (the offer is invalid).
- Net Credit limit:
    -- If ProductType <> REL, the algorithm is terminated (the offer is invalid). 
- Simple principal:
    -- If ProductType not in (CEL, REL), the algorithm is terminated (the offer is invalid).       
- Goods price Subsidized or Service goods price:
    -- If InitialTransactionType <> POS, the algorithm is terminated (the offer is invalid).
- Goods price:
    -- If InitialTransactionType <> POS and ProductType <> SAI, the algorithm is terminated (the offer is invalid).
- Sum insured:
    -- System loads Sum Insured tariff items (SITIs) from the same tariff version using Algorithm: Find tariff items by usage with usage type = 'SumInsured' as inputs and invokes the step 3 recursively for each from found SITIs.
- Annuity:
    -- If Product.ProductType not in (CEL, REL), the algorithm is terminated (the offer is invalid).
- Net Credit Amount with One Time Fee:
    -- If ProductType not in (CEL, REL), the algorithm is terminated (the offer is invalid).   
    -- If FTI.TariffItemType.ChargingPeriodicity <> 'IN_INSTALLMENT', the algorithm is terminated (the offer is invalid).
- Subsidized Principal:
  -- If InitialTransactionType <> POS, the algorithm is terminated (the offer is invalid). 
- Financed Amount:
  -- If ProductType not in (CEL, REL), the algorithm is terminated (the offer is invalid). 
  -- If FTI.TariffItemType.ChargingPeriodicity <> 'IN_INSTALLMENT', the algorithm is terminated (the offer is invalid).
- Cash Principal:
  -- If InitialTransactionType <> CASH, the algorithm is terminated (the offer is invalid).
- Deferred Interest:
  -- If Number of top up installments is not provided, the algorithm is terminated (the offer is invalid).
  -- If ProductType not in (CEL) and InitialTransactionType <> CASH, the algorithm is terminated (the offer is invalid). 
  -- If FTI.TariffItemType.ChargingPeriodicity <> 'IN_INSTALLMENT', the algorithm is terminated (the offer is invalid).
Purpose:
  -- If Purpose is not provided, the algorithm is terminated (offer is invalid).
  -- If ProductType not in (CEL), the algorithm is terminated (offer is invalid). 
Disbursement method (DM):
  -- If Disbursement method is not provided, the algorithm is terminated (offer is invalid).
Basic Principal (BP):
  -- If InitialTransactionType <> POS and ProductType <> SAI, the algorithm is terminated (the offer is invalid).
First installment (FINS):
  -- If FTI.TariffItemType.ChargingPeriodicity <> NOT_CHARGED then the algorithm is terminated (the offer is invalid).
PH only: Interest of Previous Installment (IPINS):
  -- If ProductType not in (CEL), the algorithm is terminated (the offer is invalid).
  -- If FTI.TariffItemType.ChargingPeriodicity <> 'NOT_CHARGED', the algorithm is terminated (the offer is invalid).
{ADD PG-5517}PH only: Interest amount (INTA):
  -- If ProductType not in (CEL), the algorithm is terminated (the offer is invalid).{/ADD}
- Another percentage based type, the algorithm is terminated (the offer is invalid).
	
- {ADD PCG-5620}PH only: System check all loaded FTIs where FTI.CalculationMethod = M
-- If Amount for specific tariff item type is not provided then the algorithm is terminated (the offer is invalid).
{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Calculate product offer]]
- ← Dependency: [[{MOD}Offer recalculation]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]

## 📊 Appears In (5 diagrams)

- Custom: Calculate product offer
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Offer recalculation
- Custom: PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: PCG-5620 BRPH-2423 - Debt Purchase Support in HOSEL - POC
