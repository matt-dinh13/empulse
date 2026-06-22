---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5124 CBL-28112 PER – Change the setup Minimal last installment amount and Disable PER service after the first successful execution"
domain: "Requirements Model"
element_id: 1877274
diagrams: 2
connections: 17
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}ServiceParametersDto - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5124 CBL-28112 PER – Change the setup Minimal last installment amount and Disable PER service after the first successful execution

## 📝 Notes

ServiceParametersACCSTMT

	
- statementPrintoutTemplate
must exists in Printout Template [INVALID_VALUE]
	
- emailStatement
must exists in list of values obtained by Get list of email templates [INVALID_VALUE]


ServiceParametersCELREW

	
- lengthOfEvaluationPeriod
equal or higher than 0 [INVALID_NUMBER]
	
- paymentDisciplineParameters
must fulfill Disbursement method validation
	
- currentAccount, debitCard, extraReoaymentOfLoan
at leas one of those needs to be true


ServiceParametersCET

	
- acceptedExpirationDateShift
equal or higher than 0 [INVALID_NUMBER]
	
- earlyRepaymentAlgorithm
must exist in {MOD}Early Repayment Algorithm Type
must fulfill EarlyRepaymentAlgorithm - validation
	
- expirationDateMaxLimit
must fulfill CET days expiration date limits - validation


	
- expirationDateMinLimit
equal or higher than 0 [INVALID_NUMBER]


	
- insCancellationPeriod
value between 0 and {ADD PCG-2758} 28 [INVALID_NUMBER]


ServiceParametersCHDD

	
- maxDaysAfterLastDueDate
must fulfill CHDD days after last due date - validation


	
- minDaysAfterLastDueDate
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersCHDDR

	
- maxNumberOfNextInstallments
equal or higher than 0 [INVALID_NUMBER]
	
- minDaysAfterLastDueDate
equal or higher than 0 [INVALID_NUMBER]
	
- minDaysBeforeNextDueDate
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersCHECKTL

	
- checkedDocumentType
must exist in Document Type Page Specification
	
- daysAfterServiceActivationToEvaluation
must fulfill Numeric range [0-100]
	
- penaltyDueDateInstallment
must fulfill Numeric range [0-30]


ServiceParametersCONS

	
- consolidationType
must exist in Consolidation Type
	
- expirationPeriodDays
equal or higher than 0 [INVALID_NUMBER]
	
- externalLoansRepaymentPeriodDays
equal or higher than 0 [INVALID_NUMBER]


	
- ferService
must exist in Early Repayment Algorithm Type


	
- interestAndFeeCalculationMethod
must exist in Interest and Fee Calculation Method
	
- maximalConsolidationAmount
equal or higher than 0 [INVALID_NUMBER]
	
- externalLoansRepaymentPeriodDays
equal or higher than 0 [INVALID_NUMBER]
	
- maximalDisbursementAmount
equal or higher than 0 [INVALID_NUMBER]
	
- minimalConsolidationAmount
equal or higher than 0 [INVALID_NUMBER]
	
- minimalDisbursementAmount
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersCOP

	
- acceptedDueDateShift
value between 0 and 999 [INVALID_NUMBER]


	
- earlyRepaymentAlgorithm
must exist in Early Repayment Algorithm Type
must fulfill EarlyRepaymentAlgorithm - validation


	
- length
value between 1 and 999 [INVALID_NUMBER]


ServiceParametersCRDPST

	
- instantCardType
must exist in External Card Type  [INVALID_CARD_TYPE]
	
- personalizedCardType
must exist in External Card Type  [INVALID_CARD_TYPE]
	
- postponedActivationMonths
equal or higher than 0 [INVALID_NUMBER]
	
- postponedActivationOffset
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersDEFP

	
- length
higher than 0 [INVALID_NUMBER]


ServiceParametersFBACK

	
- paymentDisciplineParameters
must fulfill PaymentDisciplineParametersDto - validation


ServiceParametersFER

	
- acceptedDueDateShift
value between 0 and 999 [INVALID_NUMBER]
	
- dpdMaxLimit
value between 0 and 999 [INVALID_NUMBER]


	
- earlyRepaymentAlgorithm
must exist in {MOD}Early Repayment Algorithm Type
must fulfill EarlyRepaymentAlgorithm - validation


	
- maxDaysBeforeEr
value between 0 and 999 [INVALID_NUMBER]
	
- minDaysBeforeEr
value between 0 and 999 [INVALID_NUMBER]


	
- dpdMaxLimit
value between 0 and 999 [INVALID_NUMBER]


	
- moratorium
value between 0 and 999 [INVALID_NUMBER]


	
- variants
must fulfill ServiceParametersInputFERVariants - validations


ServiceParametersGIFTP

	
- paymentDisciplineParameters
must fulfill PaymentDisciplineParametersDto - validation


	
- giftPaymentsNumber
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersGRPER

	
- earlyRepaymentAlgorithm
must exist in {MOD}Early Repayment Algorithm Type
must fulfill EarlyRepaymentAlgorithm - validation


	
- length
higher than 0 [INVALID_NUMBER]
must fulfill LengthInMonths >= MoratoriumInMonths


	
- moratorium
equal or higher than 0 [INVALID_NUMBER]


	
- paymentDisciplineParameters
must fulfill PaymentDisciplineParametersDto - validation


	
- premiumInterestRate
less than 1 and only 6 decimal places are allowed [INVALID_PERCENTAGE]


ServiceParametersGRREL

	
- debtTolerance
equal or higher than 0 [INVALID_NUMBER]


	
- length
value between 0 and 31 [INVALID_NUMBER]


	
- eligibleTariffItemTypeCodes
must exist in Tariff Item Type
	
- calculationAlgorithm
mandatory
must exists in GRREL Calculation Algorithm Type


ServiceParametersIPPACK

	
- financingPackageCodes
must exist in  {ADD}Available Financing Packages [INVALID_FINANCING_PACKAGE]


	
- financingPackagePurposes	
must exist in Financing Package Purpose [INVALID_PURPOSE]
	
- serviceLevel
must exist in IPPACK Service Level [INVALID_SERVICE_LEVEL]


ServiceParametersInsurance

	
- currency
must exists in Currency


	
- cutOffDaysCount
equal or higher than 0 [INVALID_NUMBER]


	
- earlyTerminationTerm
must exist in Early Termination TermType


	
- firstPeriodDuration
must exist in First Insurance Period Duration


	
- firstPeriodDurationOffset
equal or higher than 0 [INVALID_NUMBER]


	
- firstPeriodTrigger
must exist in First Insurance Period Trigger


	
- firstPeriodTriggerOffset
equal or higher than 0 [INVALID_NUMBER]
	
- insuranceCancellationOffset
equal or higher than 0 [INVALID_NUMBER]


	
- insuranceProgramCode
must fulfill Insurance program - validation
	
- insuranceTerminationOffset
equal or higher than 0 [INVALID_NUMBER]


	
- maximalLoanAmount
equal or higher than 0 [INVALID_NUMBER]


	
- nextPeriodDuration
must exist in Next Insurance Period Duration


	
- nextPeriodDurationOffset
value between 0 and 99,999 [INVALID_NUMBER]
available and mandatory only when firstPerdiodDuration = BILLING_PERIOD
	
- numberOfBillingPeriods
value between 0 and 999 [INVALID_NUMBER]


	
- refundOnManualTermination
must exist in Insurance Premium Refund Type


	
- termCountLimit
equal or higher than 0 [INVALID_NUMBER]
	
- remainingFeeCalculation
mandatory [REQUIRED]
must exists in Remaining Fee Calculation
	
- ratio
higher then 0, less than 1 [INVALID_PERCENTAGE]
	
- limitCancellationToCOP
Service.ServiceParametersInsurance.limitCancellationToCOP value is ignored and value is taken from Service.limiCancellationToCOP


	
- coverageTrigger
must exists in First Insurance Period Trigger
	
- coverageTriggerOffset
equal or higher than 0 [INVALID_NUMBER]


	
- coverageDuration
must exists in First Insurance Period Duration
	
- coverageDurationOffset
equal or higher than 0 [INVALID_NUMBER]
	
- cross-validation
both or none of coverageTrigger and coverageTriggerOffset must be filled
both or none of coverageDuration and coverageDurationOffset must be filled


ServiceParametersLOYALTY

	
- rewardScheme
must exist in REQ#1 - Retrieve list of Reward Schemes from LRP module


ServiceParametersLRES

	
- bonusServicesImpact
must exist in {MOD}Bonus Services Impact Type


	
- expirationPeriodDays
equal or higher than 0 [INVALID_NUMBER]


	
- minDaysBeforeInstallment
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersMTCACC

	
- accountType
Must exists in list of account types from external module (Account management (AM)) by rest service call GET request: /openapi/v2/technicalService/enums/accountTypes
must fulfill {ADD}Account type validation


	
- installmentPrescriptionMinLimit
equal or higher than 0 [INVALID_NUMBER]
only for accountType not in (CURRENT_ACCOUNT)


	
- maxCreditAmount
equal or higher than 0 [INVALID_NUMBER]
must be equal or higher than minCreditAmount
only for accountType not in (CURRENT_ACCOUNT)


	
- minCreditAmount
equal or higher than 0 [INVALID_NUMBER]
must be equal or lower than maxCreditAmount
only for accountType not in (CURRENT_ACCOUNT)


	
- minInstallmentBase
must exist in Base Type
only for accountType not in (CURRENT_ACCOUNT)


	
- minInstallmentFixedAmount
equal or higher than 0 [INVALID_NUMBER]
only for accountType not in (CURRENT_ACCOUNT)


	
- minInstallmentRate
less than 10 and only 6 decimal places are allowed [INVALID_PERCENTAGE]
only for accountType not in (CURRENT_ACCOUNT)


	
- minInstallmentRounding
must fulfill RoundingTypeDto
only for accountType not in (CURRENT_ACCOUNT)


	
- minInstallmentRoundingScale
value between 0 and 1,000,000,000 [INVALID_NUMBER]
only for accountType not in (CURRENT_ACCOUNT)
	
- billingDayCalculationMethod
must exists in Billing day calculation method [INVALID_VALUE]
mandatory[REQUIRED]
	
- dueDayOffset
available values 0-28, 31
mandatory{REQUIRED}
	
- fixedDueDay
Available and mandatory only when billingDayCalculationMethod = BY_DUE_DAY
available values 1-28 [INVALID_NUMBER]
	
- accountLifespan
mandatory for accountType in (VIRTUAL_LIMIT)
optional for account type not in (VIRTUAL_LIMIT)
available values 1-999
	
- accountingMethod
must exists in Accounting Method.Code [INVALID_VALUE]
mandatory [REQUIRED]


ServiceParametersPAYHOL

	
- bonusServicesImpact
must exist in {MOD}Bonus Services Impact Type


	
- expirationPeriodDays
equal or higher than 0 [INVALID_NUMBER]


	
- minDaysBeforeInstallment
equal or higher than 0 [INVALID_NUMBER]
	
- maxNumberOfDeferredPeriods
equal or higher than 0 [INVALID_NUMBER]


ServiceParametersPER

	
- acceptedDueDateShift
value between 0 and 100 [INVALID_NUMBER]
mandatory [REQUIRED]
	
- dpdMaxLimit
value between 0 and 999 [INVALID_NUMBER]
mandatory [REQUIRED]


	
- minimalLastInstallmentAmount
equal or higher than 0 [INVALID_NUMBER]
mandatory [REQUIRED]
	
- minimalPerAmountRate
less than 0.1 and only 6 decimal places are allowed [INVALID_PERCENTAGE]
mandatory [REQUIRED]


	
- minimumDaysBeforeEr
value between 0 and 100 [INVALID_NUMBER]
mandatory [REQUIRED]
	
- moratorium
value between 0 and 100 [INVALID_NUMBER]
mandatory [REQUIRED]


	
- perType
must exist in PER Type
mandatory [REQUIRED]
	
- {ADD PCG-5124/}
maximalNumberOfUsage
For country: VN
higher than 0 [INVALID_NUMBER]
	
- minimalRemainingPrincipalFixed
For country: VN
higher than 0 [INVALID_NUMBER]
only one of minimalRemainingPrincipalFixed and minimalRemainingPrincipalPercentage can be filled
	
- minimalRemainingPrincipalBase
For country: VN
must exists in Base Type filtered by according to the rule Search for Allowed Base Types by Usage for usage = "SPER" 
must be filled together with minimalRemainingPrincipalPercentage
	
- minimalRemainingPrincipalPercentage
For country: VN
higher than 0 only 6 decimal places are allowed [INVALID_PERCENTAGE]
must be filled together with minimalRemainingPrincipalBase
only one of minimalRemainingPrincipalFixed and minimalRemainingPrincipalPercentage can be filled
{/ADD}


ServiceParametersPREFDD

	
- dueDaysMap
must fulfill PREFDD DueDaysMap - validation
	
- defaultPreferredDay
value between 1 and 28
for country: mobi bank


ServiceParametersRELFER

	
- minimumDaysBeforeDueDate
equal or higher than 0 [INVALID_NUMBER]
optional
	
- numberOfDaysForRepayment	
equal or higher than 0 [INVALID_NUMBER]
	
- enablePartialEarlyRepayment
default value 0


ServiceParametersRELIP

	
- coolingOffPeriodAIR
less than 1 and only 6 decimal places are allowed [INVALID_PERCENTAGE]


	
- coolingOffPeriodLength
value between 0 and 9,999 [INVALID_NUMBER]


	
- coolingOffPeriodUnit
must fulfill Period Unit
	
- dayCountMethod
must fulfill DayCountMethodTypeDto
	
- dueDateMethod
must fulfill RELDayInMonthMethodTypeDto
	
- firstPrescriptionDateType
must fulfill RELIPFirstPrescriptionDateTypeDto
	
- installmentPlanMethod
must fulfill InstallmentScheduleMethodTypeDto
	
- installmentRoundingMethod
must fulfill RoundingTypeDto


	
- installmentRoundingScale
value between 0 and 1 000 000 000 [INVALID_NUMBER]


	
- interestPeriodMethod
must fulfill RELDayInMonthMethodTypeDto
	
- Cross-validation
Combination of:
- Installment Plan Method
- Due Day Method
- Installment Rounding Method
- Installment Rounding Scale
must be defined in RELIP Service Allowed Combination [INVALID_RELIP_COMBINATION]


	
- variants
must


ServiceParametersRELPAYHOL

	
- maxNumberOfDeferredPeriods
value between 0 and 999 [INVALID_NUMBER]
	
- maxNumberOfDeferredPeriodsInTimePeriod
value between 0 and 999 [INVALID_NUMBER]


	
- minMonthsBetweenDeferredPeriods
value between 0 and 999 [INVALID_NUMBER]
	
- timePeriodInYears
value between 0 and 999 [INVALID_NUMBER]


ServiceParametersPAYM 

	
- sourceSystem
mandatory [REQUIRED]
must exists in list of source system obtained by rule Get Codelists from CSD with parameters: group = CUST, codelist = PARTNER and activeYn = true


ServiceParametersTOPUP 

	
- maxOverlapPeriod
value higher than 0 [INVALID_NUMBER]
	
- maxOverlapPeriodDays
value higher than 0 [INVALID_NUMBER]
	
- cross-validation
only one of maxOverlapPeriod, maxOverlapPeriodDays must be filled[REQUIRED]


ServiceParametersSALPROOF 

	
- validity
mandatory [REQUIRED]
value between 0 and 999 [INVALID_NUMBER]
for country: mobi bank


{ADD PCG-5511}ServiceParametersIBACK 
For country: PH

	
- paymentDisciplineParameters
must fulfill PaymentDisciplineParametersDto - validation
	
- PaymentDisciplineParametersDto.dpdScope must be I (Individual contract)

{/ADD}

## 🔗 Connections (17)

- → Dependency: [[Numeric range [0-30]]]
- → Dependency: [[{ADD}Account type validation]]
- → Dependency: [[{ADD}Get Codelists from CSD]]
- → Dependency: [[LengthInMonths _= MoratoriumInMonths]]
- → Dependency: [[CURRENT_ACCOUNT]]
- → Dependency: [[PaymentDisciplineParametersDto - validation]]
- → Dependency: [[Search for Allowed Base Types by Usage]]
- → Dependency: [[Numeric range [0-100]]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[Disbursement method validation]]
- → Dependency: [[ServiceParametersInputFERVariants - validations]]
- → Dependency: [[PREFDD DueDaysMap - validation]]
- ← Dependency: [[Service - validation]]
- → Dependency: [[CET days expiration date limits - validation]]
- → Dependency: [[CHDD days after last due date - validation]]
- → Dependency: [[Insurance program - validation]]
- → Dependency: [[EarlyRepaymentAlgorithm - validation]]

## 📊 Appears In (2 diagrams)

- Custom: PCG-5124 CBL-28112
- Custom: Validation Rules
