---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2583 (CLM-1161) API to Update Account Opening Result for DBS Bundling Product"
domain: "Requirements Model"
element_id: 1242708
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Exposing a API to change loan service status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2583 (CLM-1161) API to Update Account Opening Result for DBS Bundling Product

## 📝 Notes

On establishing a loan service in Contract Service is needed to recognize what initial status the service will have. For this case - service of Code = BUNDLE1 - it will be status NEW. 

Recommended usage of the API for service status change:

	
- First, the consumer should call GET /v2.0/customers/cuid/contracts/contractNumber/services/ to getting contract services related to the contract
	
- Next, identifier of a service which should be changed is obtained.
	
- Finally, consumer calls POST /v2.0/~/services/serviceId to change service status

## 📊 Appears In (1 diagrams)

- Custom: CBL-2583 (CLM-1161) API to Update Account Opening Result for DBS Bundling Product
