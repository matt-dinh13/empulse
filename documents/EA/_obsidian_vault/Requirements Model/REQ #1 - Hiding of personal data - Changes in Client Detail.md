---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1688841
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Hiding of personal data - Changes in Client Detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

Goal of this task i to:

	
- Start to mask primary e-mail and control it with the access right UC06_030_ClientEmail
	
- Control hiding of Street name and Ladmark from Contact address and Permanent address with the access right UC06_030_ClientAddressData
	
- Control hiding of Gender, Father full name and Birth date with the access right UC06_030_AdditionalClientData
	
- Control hiding of identification documents with the access right UC06_030_Documents.



Notes: LOR related part is provided for comparison.


Initial configuration:

VN

	
- Assign the privileges UC06_030_ClientEmail, UC06_030_Documents to all VN roles which currently have the UC06_030 privilege assigned except roles TELESALES_OPERATOR, TLS_CLX_ONLINE_APP_OPERATOR and TELESALES_TEAMLEADER
	
- Assign privileges UC06_030_ClientAddressData and UC06_030_AdditionalClientData to all roles which currently have the UC06_030 privilege assigned


PH

	
- Assign privileges UC06_030_ClientEmail, UC06_030_ClientAddressData, UC06_030_AdditionalClientData and UC06_030_Documents to all PH roles which currently have the UC06_030 privilege assigned except role BSL_CS_OPERATOR


IN

	
- Assign privileges UC06_030_ClientEmail, UC06_030_ClientAddressData, UC06_030_AdditionalClientData and UC06_030_Documents to all roles which currently have the UC06_030 privilege assigned


ID 

	
- Assign privileges UC06_030_ClientEmail, UC06_030_ClientAddressData, UC06_030_AdditionalClientData and UC06_030_Documents to all roles which currently have the UC06_030 privilege assigned


KZ

	
- Assign privileges UC06_030_ClientEmail, UC06_030_ClientAddressData, UC06_030_AdditionalClientData and UC06_030_Documents to all roles which currently have the UC06_030 privilege assigned

## 📊 Appears In (1 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
