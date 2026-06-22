---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing"
domain: "Requirements Model"
element_id: 1878891
diagrams: 11
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Calculation of Loan Service parameters

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing

## 📝 Notes

Business rules for calculation of loan service parameters for services assigned to offer and contract.
Input parameters:

	
- Contract - processed contract
	
- Event Type - a value passed from calling use case (Check Moment Type enumeration)


Steps:
1. System gets all active Loan Services for processed Contract as follow:

	
- for Event Type = 'CIC' uses Contract -> Offer Service and Offer Service Installment
	
- for Event Type = 'CS', 'CDD', 'PER', 'CA' uses Contract -> Contract Service and Installment, and for all found Contract Services gets list of ServiceParameters defined by Service Type Parameter Definition (Event Type and Service Type)

2.  If Contract.Contract_type = 'REL' then only services without dependency on Installments are calculated
3. {ADD CSI-2364} For each ServiceParameter, system gets ServiceDefinition by Get Service definition from Services with serviceCode = Loan Service.Service Code, serviceVersion = Loan Service.Service Version and perform creation and setting of Service Parameters as below.{/ADD}

List of available Service Parameters by Service Type
GRPER (Grace period service)

	
- END_OF_GRACE_PERIOD:
- dpdDelay = if DIFFER_TOLERANCE_FOR_LAST_DPD = true then dpdDelay = LAST_DPD_DELAY_TOLERANCE
else dpdDelay = DPD_DELAY_TOLERANCE (where DIFFER_TOLERANCE_FOR_LAST_DPD, LAST_DPD_DELAY_TOLERANCE and DPD_DELAY_TOLERANCE are taken from the Grace Period service related to the Contract)
- End of Grace period date is calculated as the Due Date of the X-th active Installment of 'STANDARD' type + dpdDelay  (where X is parameter Length of grace period (number of Installments) from the Grace Period service type assigned to Offer Service/Contract Service) .
	
- END_OF_GRPER_MORATORIUM - calculates  End of Grace period Moratorium as the due date of the X-th installment of type 'STANDARD' where X is parameter Moratorium (number of installments) from the service of type Grace period assigned to Offer Service/Contract Service. The value is calculated and set only if Number of Installments > X > 0.


GIFTP (Gift Payment service)

	
- GIFT_PAYMENT_DATE - it calculates expected Date of Gift payment as due date of the (N minus G)-th installment on the contract, where N is number of contract's standard installments (Installment.Installment_Type = 'STANDARD') and G is number of gift payments defined on the Service.


COP (Cooling-off Period Service)

	
- COP_DUE_DATE (due date of the service) = Financial parameter.Loan providing date + COP Service.COP Length
	
- COP_DUE_DATE_MAX (maximal acceptable date when service can be applied) = COP_DUE_DATE + COP Service.Accepted Due Date Shift
	
- COP_ACCEPT_SU (flag determining whether a small underpayment allowed for the service) = COP Service.Accept Small Underpayment
	
- {ADD CSI-2364}COP_CANCEL_INSURANCE (Insurance fee is deducted from the COP amount calculation) - value is taken as follow:
- get all Contract Insurance Service (Service Code, Service Version) and find the first the Insurance Service where Refund On Manual Termination = REFUND_ON_CANCELLATION
- If an Insurance Service is found, then set TRUE (1), else set FALSE (0){/ADD}


CHECKTL (Checking Terms of Loan Service)

	
- CHECKTL_DATE (Date of evaluation of the Checking Terms of Loan service) =  Financial parameter.Loan providing date + CHECKTL.Number of Days After Service Activation to Evaluation


CELREW (CEL Reward)

	
- CELREW_REQUEST (whether CELREW request has already been created by system) = FALSE


FER (Full Early Repayment)

	
- AUTOMATIC_FER_PROCESSING = value from Service -> Full Early Repayment Service.Automatic Service Processing; If value is NULL, set to 0 (FALSE)
	
- FER_USE_PAY_DEPOSIT_DATE = value from Service -> Full Early Repayment Service.Use Payment Deposit Date; If value is NULL, set to 0 (FALSE)


{ADD CSI-2407}
TOPUP

	
- TOPUP_OVERLAP_PERIOD_END_DATE - it calculates end of overlap period as due date of the N-th installment on the contract, where N is count of overlap periods defined in the TOPUP_OVERLAP_PERIOD parameter of the same contract service. If N is not found or 0 then value is not created or cleared

{/ADD}

Parameter values storage
If parameters are created or updated on Event Type = 'CIC' then are stored into the Offer Service Parameter entity
If parameters are created or updated on Event Type = 'CS', 'CDD', 'PER', CA then are stored into the Contract Service Parameter entity.

Every created parameters is unique for the entity, so if a new value is calculated later in the process, the original value has to be replaced.

## 🔗 Connections (8)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[{MOD}01.290 Activate contract]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- → Dependency: [[REQ#1 - Setting parameter for automatic FER processing]]
- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- ← Dependency: [[{MOD}Update data in contract related structures]]

## 📊 Appears In (11 diagrams)

- Custom: CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing
- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS
- Custom: CBL-4071 (CLM-1708) Full Early Repayment Services Automation
- Custom: Common Business Rules for Contract Management
- Use Case: Activation of contract on a repayment
- Use Case: Change Due Date processing
- Use Case: Contract registration
- Use Case: Contract signing
- Use Case: PER request processing
- Use Case: Prepare documentation to sign
