---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1825188
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Get User based on SSO token

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

External system can send SSO token in header of the SOAP request for endpoint specified in global parameter enableTokenImpersonationForWsEndpoints. This token is then validated using API isTokenValid:
- if token is valid, then system gets user using API attributes
- if token is invalid, then system uses technical user of the API call
The selected user is then considered as an originator who triggered the call and is used in related use case accordingly.

If no SSO token is send in the API request, calling system (user identified against WS) is automatically considered as an originator of the API call.

## 🔗 Connections (1)

- ← Dependency: [[CalculateCustomerOfferRequest - validation rules]]
