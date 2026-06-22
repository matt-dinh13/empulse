---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts"
domain: "Requirements Model"
element_id: 1880068
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-5624 Show Expiration Date on the BSL Account detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts

## 📝 Notes

BSL Contract detail - Account detail

1/ New REST API integration

	
- Currently WS AccountUIWS.GetAccountRequest is used which does not support new Expiration date and should not be used any more.
	
- Reintegration to new REST API is needed:
/api/public/v1/accounts/{accountNumber}
https://am.ph00a1.cz.infra/cabus-am/rest/swagger-ui/index.html?urls.primaryName=api-next#/Account/getAccountByAccountNumber
	
- List of attributes is the same as for WS.


2/ Show Expiration date field in UI (only if contains a value)

## 📊 Appears In (1 diagrams)

- Custom: CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts
