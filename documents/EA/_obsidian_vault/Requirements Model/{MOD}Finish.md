---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC"
domain: "Requirements Model"
element_id: 1716030
diagrams: 4
connections: 2
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Finish

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC

## 📝 Notes

It finishes communication session

System calls the rule{ADD CLM-5070} Set link to Client center which sets the element's behavior depending on the result of the rule {/ADD} Select Client center for user. {DEL CLM-5070}If the rule returns CLC_MODULE and in the URL is source = CLC then system re-directs user to Client detail screen in Client center module. //https://clc.*/client-detail?cuid=72879
If the rule returns CLC_ERROR then system displays the blank page with the error message MSG_CLC_NOT_AVAILABLE_ON_DOMAIN (i.e. CLC is not available on this domain).{/DEL}

Localization code: COM_Finish

## 🔗 Connections (1)

- → Dependency: [[{MOD}Select Client center for user]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC
- Custom: CBL-11677 (LM-4295) - Switch internal traffic from SHOP domain to CLC
- Custom: CLM-5070 Remove navigations to CLC on shop domains
- Custom: Create communication
