---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC"
domain: "Requirements Model"
element_id: 1716166
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-11677 -  Client center - BSL - Redirection to CLC

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC

## 📝 Notes

Implement CLM Feature flag enableCLCModule. When flag is on then all refences in BSL are to CLC module instead of BSL CLC.
If user has user setting for CLC module, then it overrules CLM Feature flag enableCLCModule.

BSL -> CLC
- via url with parameters -  via fallback
- bread crumps -  it should not be stored since external link is not bookmarkable or it will in worse case be caught by fallback
- Main menu -  interceptor of menu creation which will add external target to MenuTO object
- Contract detail - 
- Application detail - let it be caught by fallback
- Communication detail - 
- Account detail - 
- Card PIN request page? - can't trigger it on UI (it should be on first form step cancel button) - let it be caught by fallback

CLC -> BSL - pass cuid + source + client detail tab
- Create communiction - Finish button  pass source=CLC, cuid=xxxx, tab=xxxx
- Collection tools overview - Back button - 
- Installment schedule -  I found only back button to contract detail
- TCK -  currently there is no link to client

## 📊 Appears In (1 diagrams)

- Custom: CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC
