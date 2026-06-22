---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1773429
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Insurance eligibility validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

This algorithm checks eligibility of insurance services.

Inputs:

	
- Unification of stored application data and data from input(APP)


Output: list of

	
- service
	
- eligibility (true/false)
	
- error message - optional


All validations are done for a list of assigned services defined in Offer Financial Parameters -> Offer Service.
Insurance eligibility is always checked to reference date = date of generation of the offer(Offer Financial Parameters.Calculation Date), using parameters of Insurance Service and Insurance Program which are referenced from the service offer and data from the input.

1. Check the rule Minimum client's age with (Service, APP.clientBirthDate) as parameters. (MSG_IneligibleInsuranceMinAge - "Insurance with code ${insuranceCode} is not eligible because of minimum age.")
2. Check the rule Maximum client's age with (service, APP.clientBirthDate, APP.clientGender,"first") as parameters. (MSG_IneligibleInsuranceMaxAge - "Insurance with code ${insuranceCode} is not eligible because of maximum age.")
3. If the profession is defined, check the rule Eligible profession with (Service, App->Employment.professionCode) as parameters. (MSG_IneligibleInsuranceProfession - "Insurance with code ${insuranceCode} is not eligible for profession type ${professionType}.")

If at least one of the check fails, the service eligibility is set to FALSE in the output with list of all error messages.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Validation Rules
