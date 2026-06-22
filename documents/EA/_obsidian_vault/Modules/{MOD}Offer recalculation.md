---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator/Business Rules"
domain: "Modules"
element_id: 1878789
diagrams: 11
connections: 23
tags:
  - requirement
  - modules
---

# 📋 {MOD}Offer recalculation

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator/Business Rules

## 📝 Notes

// This algorithm recalculates offer financial parameters after the set of selected services (loan options or insurance) or any other parameter (Installment Schedule Method, Preferred Due Day, etc.) has been changed.
It is available only for calculation algorithm in (STND, REVOLVING).

Following values are used from the original Offer_Financial_Parameters:

	
- product variant (Offer_Financial_Parameters.ProductVariant)
	
- Financing Package (Offer_Financial_Parameters.FinancingPackage)
	
- Financing Scheme Variant (Offer_Financial_Parameters.FinancingSchemeVariant)
	
- term (Offer_Financial_Parameters.Terms)
	
- annual interest rate (Offer_Financial_Parameters.InterestRate)
	
- price (Offer_Financial_Parameters.Price) - for initialTransactionType = POS
	
- required credit amount (Offer_Financial_Parameters.NetCreditAmount) - for initialTransactionType = CASH
	
- extra limit = Offer_Financial_Parameters.NetCreditLimit - Offer_Financial_Parameters.NetCreditAmount (only if for initialTransactionType is in (POS, CASH); otherwise extra limit = 0)
	
- cash payment (Offer_Financial_Parameters.CashPayment)
	
- TopUp parameters (Offer_Financial_Parameters->Offer_service->Offer_service_parameters and Offer_Financial_Parameters.Preferred_Due_Date)


	
- Structured Parameters - 
Qualification criteria (type, value), 
Tariff limit value (type, value), 
Financing package criteria(type, value), 
{ADD PCG-5669}PH only: Discount (code, amount){/ADD},
{ADD PCG-5767}PH only: Trade-in amount{/ADD}, 
{ADD PCG-5620}PH only: Tariff item type manual amount (tariff item type, amount), 
PH only: First due date, 
PH only: Sign date{/ADD}

Other financial parameters are recalculated. 
It is possible that recalculation of the offer returns no offer (due to incorrect settings or if the recalculated offer does not comply with limits set on the given product or product variant - e.g. minimal cash payment).

Insurance eligibility is always checked to reference date = date of generation of the offer (e.g. age of client), which is currently generated or chosen (when applied after offer generation), using parameters of Insurance Service and Insurance Program which are referenced from the offer, and data from current AppForm.
The only exception is checking of service exclusivity, where setting is not versioned and for validation is always used current setting.

Inputs:

	
- Original OFP (original offer before recalculation)
	
- OfferRELIPCode of Offer RELIP Service Variant to be recalculated
	
- Commodities
	
- Services (Code + Version) - both loan options services and insurance services
List of commodities for specific service
	
- Installment Schedule Method, PreferredDueDay (if has not been changed before recalculation then the values from Original OFP are used)
	
- Structured Parameters - Qualification criteria (type, value), Tariff limit value (type, value)


Global parameters:

	
- AnnuityRounding


Output:
OFP (new)

Calculation:
Following values are simply copied from the original offer:

	
- offer type
	
- product type


	
- initial transaction type
	
- isDebit flag (for selected option debit card)


	
- product variant
	
- term
	
- number of advance payments
	
- interest rate
	
- salesroom
	
- currency
	
- commodities
	
- link to campaign offer limits



	
- Service type
System checks that maximum number of selected service for each type is equal or lower than ServiceType.MaxAssignOnOffer. If not, system logs error message (SERVICE_MAX_ON_OFFER) and offer is not recalculated.
	
- Service and Insurance determination
ServiceCommodity = list of commodities for specific service. If not defined on input then ServiceCommodity = list of all commodities from offer
If globalParameter.InsuranceOnOfferDurationLimit (PCG_LIMIT_OFFER_INS_BY_TERMS) = true and Service.Category = INSURANCE and Service.FirstPeriodDuration in (TERM_COUNT, TERM_COUNT_WITH_LIMIT) then Service.FirstPeriodDurationOffset >= Offer_Financial_Parameters.Term
System goes through services handed in parameters and for each of them performs following:
- system loads given version of the service
- system creates Offer Service instance(s)
  -- if service is an Insurance Service (Service->Service Type.Category = "Insurance") and service's scope is different to "Commodity", system creates one Offer Insurance Service instance with these attributes:   
    * Insurance Contract Code not set
    * Insurance Program Code and Version set to active version of Insurance Program referenced by Insurance Service.Insurance Program Code
    * link to commodity not created
  -- if service is an Insurance Service and service's scope is "Commodity", system creates an Offer Insurance Service instance for each commodity from ServiceCommodity list whose type is eligible (is among Insurance Program->Eligible Commodity Types) for active version of Insurance Program referenced by Insurance Service.Insurance Program Code. Created instances will have following attributes:
    * Insurance Contract Code not set
    * Insurance Program Code and Version set to active version of Insurance Program referenced by Insurance Service.Insurance Program Code
    * Commodity ID - commodity which the instance is created for.
  -- if service is not an insurance service and service's scope is different to "Commodity", system creates one Offer Service without reference to commodity
  -- if service is not an insurance service and service's scope is "Commodity", system creates an Offer Service instance for each commodity with reference to commodity set to commodity which the instance is created for.
	
- Add mandatory service
System add mandatory services for Product according to rule {ADD}Add mandatory service
	
- Service inclusivity
System checks inclusive services according to rule Service Inclusivity Check.
	
- Insurance period estimation - System calculates for each of the created insurance services estimated insurance period which is determined according the rule Determine First Insurance Period with following parameters:
- date sent to approval = reference date
- date signed = reference date
- transaction signed = (If Contract Type = REL and Offer_Financial_Parameters.InitialTransaction in (POS, CASH) then reference date else NULL)
- date activated = reference date
- term = term of the original offer
- insurance service = insurance service whose period is being calculated
Other parameters of the rule remain unset.
System sets Offer Insurance Service.Estimated First Period Start, Offer Insurance Service.Estimated First Period End. Previous values will be overwritten.
	
- First Due Date
If ProductType = CEL and PreferredDueDay has been changed then system recalculates FirstDueDate according to rule Evaluate First Installment Due Date with parameters
- LoanProvidingDate = {ADD PCG-5620}PH only: Sign date if it is provided, else {/ADD} NULL
- Product (corresponding with recalculated ProductVariant)
- GetParameters = True
- CUID of client (if is already known) 
- Contract (if already exists)
- TemporaryApplication (if already exists)
- OfferFinancialParameters 
{ADD PCG-5620}PH only: - FirstDueDate = First due date if it is provided, else NULL{/ADD}
which returns
- FirstDueDate
- LoanProvidingDate
	
- Fees determination
- system checks compatibility of required fees by invoking algorithm Fees determination (with product from original offer and services selected in previous step as inputs).
	
- If Product.UseFinancingScheme = False then system recalculates offer Financial parameters according to the rule Calculation of Financial Parameters of offer with respect to Offer_Financial_Parameters.ProductVariant.
If Product.UseFinancingScheme = True {DEL PCG-707}and Product.ProductType = REL{/DEL} then system 
a) Executes algorithm Evaluation of Product Offers. In this algorithm are skipped steps for selection of Product Variant, Financing Scheme and Financing Scheme Variant, the values are taken from original offer (Offer_Financial_Parameters.ProductVariant, Offer_Financial_Parameters.FinancingPackage, Offer_Financial_Parameters.FinancingSchemeVariant).
{ADD PCG-707}Change reference to NEW_Evaluation of Product Offers{/ADD}
b) If Offer_Financial_Parameters.FinancingSchemeVariant is defined then recalculate Offer_Financial_Parameters.InstallmentPlan according to algorithm Evaluation of Installment Plan for REL by this Variant.
	
- For each offer in the result set where ProductType = CEL execute algorithm Generation of CEL Installment Plan.
	
- {ADD PCG-5310}PH only: System calculates fees that were not calculated yet by algorithm Additional fees calculation {/ADD}
	
- Presented IR
System calculates set of PIRs (according to the rule Calculation of Presented IR for Product Offer with 
- Product Type
- calculated financial parameters 
as parameters.
	
- Service Subventions
If GlobalParameter.UseServiceSubvention = True then execute algorithm Service Subvention Calculation.
	
- If service of type RELIP was selected for the offer then:
- Find chosen Offer RELIP Service Variant (ChosenVariant) and corresponding RELIP Service Variant Term (RELIPVariantTerm) from original offer.
If OfferRELIPCode is defined on input then use corresponding Offer RELIP Service Variant as ChosenVariant.
- If recalculated NetCreditAmount is not in AmountInterval the generated offer is ignored (AmountInterval is defined by parameters of RELIPVariantTerm.RELIPServiceVariant <TransactionAmountMin, TransactionAmountMax))
- Else  
--- Evaluate dates for RELIP calculation with parameters:
----- ProductVariant (from original offer)
----- RELIPVariantTerm.RELIPService
----- FixedDueDay = PreferredDueDay from input
--- which returns
----- FirstBillingDate
----- InstallmentDueDayShift 
----- FirstDueDate
----- FirstEndOfInterestPeriodDate
--- Evaluate offer for RELIP Variant Term with parameters:
----- RELIPVariantTerm
----- TransactionAmount = recalculated NetCreditAmount
----- FirstBillingDate
----- InstallmentDueDayShift
----- FirstDueDate
----- FirstEndOfInterestPeriodDate
Only recalculated ChosenVariant is added to result of recalculation.
	
- System saves recalculated offer according to the rule Save offers to Offer Repository.


Rounding:
If it is not said otherwise, all calculations are made with precision to 10 places after the decimal separator.

## 🔗 Connections (21)

- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]
- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- ← Dependency: [[01.077 Change product offer parameters (UseCase 1827715)]]
- → Dependency: [[Save offers to Offer Repository]]
- → Dependency: [[Total Monthly Payment definition]]
- → Realisation: [[LOR-1565 - Create Contract2Commodity and update services related to commodity]]
- → Dependency: [[{MOD}NEW_Evaluation of Product Offers]]
- → Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- → Dependency: [[Calculation of Presented IR for Product Offer]]
- → Dependency: [[{MOD}Evaluate First Installment Due Date]]
- → Dependency: [[Evaluation of Installment Plan for REL]]
- → Dependency: [[Service Inclusivity Check]]
- → Dependency: [[Generate Installment Plan for RELIP offer]]
- → Dependency: [[{ADD}Additional fees calculation]]
- → Dependency: [[{DEL}Evaluation of Product Offers]]
- → Dependency: [[Evaluate dates for RELIP calculation]]
- → Dependency: [[Add mandatory service]]
- → Dependency: [[{MOD}Fees determination]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[Service Subvention Calculation]]
- → Association: [[REQ#1 A new input attribute trade-in amount for product calculator]]

## 📊 Appears In (11 diagrams)

- Custom: Business Rules
- Custom: Evaluation of Insurance Variants
- Custom: LOR-9480 Offer recalculate: use top up parameters
- Custom: LOR-9570 Customer offer: add loan purpose for recalculation
- Custom: Offer recalculation
- Custom: PCG-5620 BRPH-2423 - Debt Purchase Support in HOSEL - POC
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application
- Custom: PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC
- Custom: Product Offer Calculation - Use Case references
- Use Case: Product Calculator for External system - Calculate/Recalculate
- Use Case: Select insurance services
