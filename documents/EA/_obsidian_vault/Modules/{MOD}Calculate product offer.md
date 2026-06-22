---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator/Business Rules"
domain: "Modules"
element_id: 1878788
diagrams: 11
connections: 31
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculate product offer

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator/Business Rules

## 📝 Notes

Description:
This algorithm generates product offers.
Primary offer - offer generated before start of loan approval process based on client preferences
Chosen offer - offer calculated and chosen in previous steps of contract origination (saved in Offer_Financial_Parameters.Chosen = 'true')
Optional offer - secondary offer generated based on data received from loan approval process, some preferences are taken from preferences of ChosenOffer.
Recalculation - offer recalculation after change of insurance

Inputs:

Sales parameters

	
- Salesroom where the offer is calculated
	
- Client Identified - if the client has been identified in previous steps of sales process


Loan preferences (from calculator entry form or specified by LAP Offer vector )

	
- Preferred  product type option
	
- Service type (for selected option Standalone Insurance)
	
- Campaign


	
- Marketing offer on which the calculation is based on (for Primary offer only)


	
- Maximal cash payment
	
- Minimal cash payment
	
- Maximal monthly payment
	
- Minimal monthly payment
	
- Maximal term
	
- Commodities (for selected option consumer loan)
	
- Insure Commodity, Default = TRUE
	
- Manufacturer (for selected option consumer loan))
	
- Model (for selected option consumer loan)
	
- Price (for selected option consumer loan)
	
- Preferred loan amount (for selected option cash loan or revolving loan without initial transaction)
	
- Plus extra limit (for selected option consumer or cash loan)
	
- Currency
	
- Card type (for selected option debit card)
	
- Information about required and refused service types; remaining service types are set to default preference (ServiceType.Calculator)
	
- Documents delivered by the client
	
- Qualification criteria (code, value)
	
- Number of terms


	
- Interest rate
	
- Parameters - Number of top up installments, Promo action code
	
- Structured Parameters - 
Qualification criteria (type, value), 
Tariff limit value (type, value), 
Financing package criteria(type, value), 
{ADD PCG-5669}PH only: Discount (code, amount){/ADD},
{ADD PCG-5767}PH only: Trade-in amount{/ADD}, 
{ADD PCG-5620}PH only: Tariff item type manual amount (tariff item type, amount), 
PH only: First due date, 
PH only: Sign date{/ADD}

Additional Optional offer preferences (specified by LAP Offer vector or by adjusted Offer preferences of original optional offer in case of Adjustment of credit limit):

	
- Same product - boolean, defines if it is required to use the same product as it is was selected for the ChosenOffer
	
- Particular product - code of product
	
- Maximal credit amount for revolving loans means Maximal credit limit


	
- Minimal credit amount for revolving loans means Minimal credit limit


	
- Maximal effective interest rate
	
- Minimal effective interest rate
	
- PricingCategory
	
- isRelToOriginalCel
	
- Required Product Type, Required Initial Transaction Type, Required IsDebit flag - values are defined in superior use case


	
- If LAP Offer vector.prodSelectionType = CAMPAIGN for any of required optional offers then:
// Read marketing offers
System creates requestCMO for marketing offers (GetCustomerMarketingOfferRequest) with parameters:
- requestCMO.CUID = CUID of client
- requestCMO.segment = NULL
- requestCMO.startingPriority = NULL
- requestCMO.businessChannel = NULL
- requestCMO.campaignID = NULL
- requestCMO.salesroomCode = salesroom evaluated by the rule Get salesroom by operation(AF_SUBMITTED)
- requestCMO.filterAvailableOnSalesroom = True
and sends the requestCMO via CustomerMarketingOfferWS.GetCustomerMarketingOffer (UC 02.912 Get Customer Marketing Offers)
System receives responseCMO (GetCustomerMarketingOfferResponse).


	
- If the approval process (LAP) returns any new value of preferences defined for Primary offer, the original value is overwritten.


	
- RequiredServices - list of codes of required services (optional)
	
- relativeMinCashPayment



Other inputs:

	
- InsuranceVariantsRequired - indication if Insurance Variant have to be calculated
If the value is not defined on input then set it by GlobalParameter.InsuranceVariantsRequiredDefault
	
- allInsuranceCombination - indication if Insurance Variant combination have to be calculated


Global parameters:

	
- AnnuityRounding
	
- IncludeDocInProductCalculator
	
- OfferProductsWithMissingDocuments
	
- RequireAtLeastPrimaryDocuments


Outputs:

	
- Set of generated product offers


Steps:

Commodity type criterion check
System checks if commodity types meet all defined criterion by rule {ADD}Commodity type criterion check.

Product selection
System takes all products stored in the system, which meet restrictions defined by the rule Product selection.

// Collection of parameters for First Due Date calculation
If ProductType = CEL then system executes algorithm Evaluate parameters for First Installment Due Date determination with parameters (filled in only if defined):
- CUID
- Contract
- TemporaryApplication
- OfferFinancialParameters 
which returns
- PaymentChannelType
- PreferredDay
- PreviousContractDay


For each selected Product:

	
- Service determination
System determines services for Product according to rule {ADD}NEW Service determination
	
- Add mandatory service
System add mandatory services for Product according to rule {ADD}Add mandatory service
	
- Fees determination - phase 1
System determines fees for Product according to rule Fees determination (Phase1, with product and services selected as inputs). 
If the fee checking is not successful, system continues with the next available variant.
	
- Evaluation of CONS service
NetCreditAmount is calculated from rule Net credit amount definition 
If service of type CONS is assigned on product and client is identified and Product.ProductProfile.InitialTransactionType = CASH, system checks:
- calculated NetCreditAmount >= service.MinimalConsolidationAmount
- calculated NetCreditAmount <= (service.MaximalConsolidationAmount + service.MaximalDisbursementAmount)
If all the mentioned conditions for CONS service are fulfilled, CONS service stays assigned.
Otherwise CONS service and corresponding service fee are removed in next steps of offer calculation.
Note: If any of CONS service parameter in any mentioned condition has null value, the condition is considered as fulfilled.
	
- Service inclusivity
System determines inclusive services according to rule Service Inclusivity Check.
	
- First Due Date
If ProductType = CEL or SAI then system executes algorithm Evaluate First Installment Due Date with parameters
- LoanProvidingDate = {ADD PCG-5620}PH only: Sign date if it is provided, else {/ADD} NULL
- Product
- PaymentChannelType
- PreferredDay
- PreviousContractDay
- GetParameters = False
{ADD PCG-5620}PH only: - FirstDueDate = First due date if it is provided, else NULL{/ADD}
which returns
- FirstDueDate
- LoanProvidingDate
If ProductType = REL then LoanProvidingDate = Current Date + Time
	
- If Product.UseFinancingScheme = False then system evaluates offers for product sub-variants as follows:
For CEL and SAI products product sub-variant means join of product variant with one of assigned terms (more terms can be assigned to one product variant). For example, when 5 or 8 or 10 terms are assigned to product variant, one sub-variant is combination of 8 terms with other product variant parameters.
For REL products product sub-variant corresponds to just product variant.
For each sub-variant execute algorithm Evaluation of product sub-variant, which returns product offer.
If Product.UseFinancingScheme = True then system executes algorithm Evaluation of Product Offers with 
- Product
- LoanPreferences
- OfferParameters - selected Insurances and Non-insurance services, Fees, calculated FirstDueDate 
as parameters, which returns product offer.
Change reference to NEW_Evaluation of Product Offers
Returned offers are added to the result set and CalculationDate is set to current date+time.
	
- If ProductType <> SAI then system modifies the set of generated offers as described in Sorting of generated offers.
	
- For each offer in the result set where ProductType = CEL execute algorithm Generation of CEL Installment Plan.
	
- For each offer in the result set where ProductType = REL and a Financing Scheme Variant is assigned to the offer execute algorithm Evaluation of Installment Plan for REL.
	
- {ADD PCG-5310}PH only: System calculates fees that were not calculated yet by algorithm Additional fees calculation {/ADD}
	
- If InsuranceVariantsRequired = True or allInsuranceCombintation = True then for each offer generated in previous steps system calculates derived offers according to algorithm Evaluation of Insurance Variants and adds them to the result set.
	
- For each returned Offer with ProductType <> SAI system calculates Set of Presented IR according to the rule Calculation of Presented IR for Product Offer with 
- Product Type of Offer 
- calculated financial parameters 
as parameters.
If any of returned Presented IR is greater than 999 then the Offer is ignored (deleted from the result set).
	
- Service Subventions
If GlobalParameter.UseServiceSubvention = True then for each offer in the result set execute algorithm Service Subvention Calculation.
	
- System saves the set of generated offers according to the rule Save offers to Offer Repository.
	
- System returns the set of generated offers.


Rounding:
If it is not said otherwise, all calculations are made with precision to 10 places after the decimal separator.

## 🔗 Connections (28)

- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- ← Dependency: [[01.156 Adjust credit limit (UseCase 1827721)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]
- ← Dependency: [[01.155 Generate optional offers (UseCase 1827694)]]
- → Dependency: [[{MOD}Product selection]]
- → Dependency: [[Save offers to Offer Repository]]
- → Dependency: [[{MOD}NEW_Evaluation of Product Offers]]
- → Dependency: [[{MOD}Fees determination]]
- → Dependency: [[{DEL}Insurance determination]]
- → Dependency: [[{MOD}Evaluate First Installment Due Date]]
- → Dependency: [[Evaluation of Installment Plan for REL]]
- → Dependency: [[Service Subvention Calculation]]
- → Dependency: [[{MOD}NEW Service determination]]
- → Realisation: [[Req#2 - Use Preferred due day as search criteria in Product calculator]]
- → Dependency: [[Evaluate parameters for First Installment Due Date determination]]
- → Dependency: [[Add mandatory service]]
- → Dependency: [[Evaluation of product sub-variant]]
- → Dependency: [[Sorting of generated offers]]
- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]
- → Dependency: [[{DEL}Service determination]]
- → Dependency: [[{MOD}Evaluation of Insurance Variants]]
- → Dependency: [[Calculation of Presented IR for Product Offer]]
- → Dependency: [[Commodity type criterion check]]
- → Dependency: [[{DEL}Evaluation of Product Offers]]
- → Dependency: [[{ADD}Additional fees calculation]]
- → Dependency: [[{ADD}Generation of CEL Installment Plan]]
- → Dependency: [[Service Inclusivity Check]]
- → Association: [[REQ#1 A new input attribute trade-in amount for product calculator]]

## 📊 Appears In (11 diagrams)

- Custom: Business Rules
- Custom: Calculate product offer
- Custom: Evaluation of product sub-variant
- Custom: Evaluation of Products based on Financing Scheme
- Custom: PCG-5620 BRPH-2423 - Debt Purchase Support in HOSEL - POC
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application
- Custom: PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC
- Custom: Product Offer Calculation - Use Case references
- Use Case: Choose product offer
- Use Case: Generate optional offers
- Use Case: Product Calculator for External system - Calculate/Recalculate
