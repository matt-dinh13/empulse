---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1706413
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Prepare Services for Selection

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

Input: Financial parameters of product offer (FP)
Output: Set of services for selection services. 

Insurance eligibility is checked to current date in this rule.
Note:
When user updates and confirms the insurance selection then a new offer is generated, so he should see the eligibility in form for Insurance Selection from perspective of the new offer.
In this form after its initialization, some insurances are marked chosen but un-eligible to current date, so user has to decide: 
- if continues then he will lost the insurance offered in currently chosen offer when the new offer will be generated,
- if cancels selection of insurance then the originally chosen insurance stays a part of offer because the eligibility (e.g. age of client) is evaluated to reference date = date of generation of the offer, which is currently chosen.

Preparation of list of services
System calls REST API Product Recalculation data for preparation of list of available services which can be used and displayed on screen.
System checks that all returned services are allowed for recalculation and displays service which meets following conditions:
- has flag SERVICE_RECALCULATION_ALLOWED
- has mandatory_on_contract = FALSE
-  valid at the reference date (Valid From <= reference date <= Valid To) and 
- if service with category insurance then insurance program (active version) is also valid by the reference date 
the system continues with setting of eligibility for each service.

System checks Services currently adjusted in the offer and in case that any of these service is not present (nor a different version of the service) in the prepared set of services, system adds this service to the set but marks it as unavailable. This can happen in case that the offer has been generated on different date and the service adjusted in the offer is no longer valid.

If salesroom is defined where contract application is prepared then for each Service selected in previous steps system checks availability on salesroom according to the rule Check Service Availability on Salesroom. If not available then the Service is marked as unavailable.

If service has assigned mininum one qualification criterion then system displays services for which Service with qualification criteria allowed returns TRUE.
Setting of eligibility of service
If service with category Insurance then system checks eligibility rules for each service according to Insurance eligibility validation rule  and marks in the set all ineligible services for corresponding client/offered loan. 
If temporary application exists, the eligibility rules are checked against data from the temporary application:
- Age check: Temporary Application.Client Birth Date
- Age check: Temporary Application.Client Gender
- Age check: FP.Terms
- Ineligible professions check: Temporary Application.TempAppl Employment.Employment Profession
- Max loan amount check: 
FP.NetCreditAmount for ProductType = CEL
FP.NetCreditLimit for ProductType = REL
- Max sum insured check (contract/client): FP.*
- Eligible commodity types check: Application 2 Commodity.Commodity ID->Commodity.Type
If the temporary application does not exist yet (before AF 1BoD) eligibility rules are checked only against data of the offer which is shown in the offer detail and offer search parameters
- Max loan amount check: 
FP.Net Credit Amount for ProductType = CEL
FP.NetCreditLimit for ProductType = REL
- Max sum insured check (contract/client): FP.*
- Eligible commodity types check: Commodity types of commodities given as Choose product offer search criteria.

Eligible max sum insured for contract is evaluated only on Sum Insured for given Insurance Service.
Eligible max Sum Insured for client is checked for each Insurance Service included in calculation whose Insurance Program has limiting value for this criterion (Insurance Program->Insurance Eligibility Criteria.Max Sum Insured Client) defined. 
- Sum Insured is evaluated as a sum insured for the offer + if CUID is set, Sum Insured in all active Insurance Periods (i.e. having End Date >= current date) for the Insurance Contracts having Status = Active with the same Insurance Program and the same CUID. 
- Sum Insured for the offer is calculated as a summed sum insurance of all Insurance Services currently adjusted in the offer for the same Insurance Program + (if the evaluated service is not adjusted in the offer) Sum Insured for the evaluated Insurance Service.

If any of the information for eligibility checking is missing, the related check is not performed (is assumed eligible for the time being).

System takes all Service Relations where any of the Insurance Services from the prepared set are involved (Service Relation.Service Code 1 = Service.Code or Service Relation.Service Code 2 = Service.Code)

## 🔗 Connections (2)

- → Dependency: [[Service with qualification criteria allowed]]
- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Select insurance services
