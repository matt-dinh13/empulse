---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-611 (CBL-86) LOP (Loan On Phone)"
domain: "Requirements Model"
element_id: 1392308
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Supposed process of LOP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-611 (CBL-86) LOP (Loan On Phone)

## 📝 Notes

Supposed process of LOP:


	
- client calls client center
	
- operator identifies of the client (without special system support - standard client's search)
	
- total tx amount + terms (optional) are entered (a new GUI called from Account detail GUI) -> getting possible variants of installment plans (Cabus AM API: https://am.kz00a1.cz.infra/cabus-am/rest/swagger-ui.html#!/account45open45api45endpoint/calculateInstalmentPlanOffersUsingGET) / possibly no variant is returned (client has insufficient credit limit)
	
- choosing IP variant
	
- determination of the payment channel/method of disbursement, entering a bank account or choosing partner bank for disbursement
	
- create authorization request based on chosen IP variant -> sending the request to AM -> syncho evaluation accepted/not accepted



Description of used method for IP offers generation:
https://wiki.homecredit.net/confluence/display/CardBusiness/Develop
/openapi/accounts/{accountNumber}/transactions/instalmentPlanOffers
GET

Chosen offer:
AccountTransactionWS.AuthorizeTransactionWithIPVariant  (U LOPu asi se zavolá pouze autorizace, protože potvrzovat to bude PAY module)

## 📊 Appears In (1 diagrams)

- Custom: CLM-611 (CBL-86) LOP (Loan On Phone)
