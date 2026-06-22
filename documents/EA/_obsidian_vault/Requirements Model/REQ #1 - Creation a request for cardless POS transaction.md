---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1686 (CLM-961) Repeated POS"
domain: "Requirements Model"
element_id: 1826182
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Creation a request for cardless POS transaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1686 (CLM-961) Repeated POS

## 📝 Notes

A brief list of steps for cardless POS transaction creation:

	
- Receive basic commodity data which user already entered on the product calculator (optional)
	
- Show a form for cardless transaction with some basic client's data,account info and commodity data
	
- after user confirm commodity data entering, system validates commodity data, user can fix possible invalid/missing data
	
- sent the commodity data into storage (CreateCommodityDataRequest)
	
- send request for offer installment plans (calls REST API -> GET /openapi/accounts/{accountNumber}/transactions/instalmentPlanOffers)
	
- show returned installment plan offers to user
	
- after user chooses one offer, generate and validate one time password
	
- if password validation passes, send request for cardless POS transaction confirmation
	
- show result of the request

## 📊 Appears In (1 diagrams)

- Custom: CBL-1686 (CLM-961) Repeated POS
