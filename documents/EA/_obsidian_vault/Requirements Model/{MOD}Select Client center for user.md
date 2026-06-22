---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC"
domain: "Requirements Model"
element_id: 1760099
diagrams: 5
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Select Client center for user

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC

## 📝 Notes

{CLM CLM-3731/}
This function decides which Client center should be used for current user:

	
- Client center as part of BSL application
	
- Client center as a standalone application


Steps:

	
- If User settings[where .Code = 'CLC_MODULE' and User Id = Current user Id].value = 0 then system returns 'CLC_BSL' and scenario ends.
	
- If CLM Feature Flag enableCLCModule = 0 then system returns CLC_BSL and scenario ends.
	
- If CLM Feature Flag enableCLCModule = 1 or User settings[where .Code = 'CLC_MODULE' and User Id = Current user Id].value = 1 then system proceeds with next step.
	
- If current domain = global database parameter CLM_DOMAIN_RESOLVER {ADD CLM-4295}and global database parameter clcFallbackToBslOnPublic = True{/ADD} then system returns 'CLC_BSL' and scenario ends.
{ADD CLM-4295}
	
- If current domain = global database parameter CLM_DOMAIN_RESOLVER and global database parameter clcFallbackToBslOnPublic = False and client IP address is in private ranges and system property publicClcDomain <> '' then system returns 'CLC_MODULE' and scenario ends.
	
- If current domain = global database parameter CLM_DOMAIN_RESOLVER and global database parameter clcFallbackToBslOnPublic = False and client IP address is in public ranges and system property publicClcDomain = '' then system returns 'CLC_ERROR' and scenario ends.
	
- If current domain = global database parameter CLM_DOMAIN_RESOLVER and global database parameter clcFallbackToBslOnPublic = False  and client IP address is in public ranges and system property publicClcDomain <> '' then system returns 'CLC_MODULE' and scenario ends.
{/ADD}
	
- System returns CLC_MODULE.



Not on SHOP domain => redirect to CLC
On SHOP & clcFallbackToBslOnPublic == true => stay in BSL
On SHOP & clcFallbackToBslOnPublic == false && clientIpAddress IN private ranges => redirect to CLC internal domain
On SHOP & clcFallbackToBslOnPublic == false && clientIpAddress IN public ranges && publicClcDomain != "" => redirect to CLC public domain
On SHOP & clcFallbackToBslOnPublic == false && clientIpAddress IN public ranges && publicClcDomain == "" => display ERROR that CLC not available on public domain

## 🔗 Connections (9)

- ← Dependency: [[{MOD}Back]]
- ← Dependency: [[{MOD}Switch to client]]
- ← Dependency: [[{MOD}Finish]]
- ← Dependency: [[{MOD}Client name (GUIElement 1716638)]]
- ← Dependency: [[{MOD}06.030 Show Client Data]]
- ← Dependency: [[{MOD}06.040 Search Clients]]
- ← Dependency: [[{MOD}Search clients]]
- ← Dependency: [[{MOD}Client full name (GUIElement 1878065)]]
- ← Dependency: [[{MOD}Client full name (GUIElement 1881263)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC
- Custom: CBL-11677 (CLM-4225) Client center - Stop CLC module re-directs on public domain
- Custom: CBL-11677 (LM-4295) - Switch internal traffic from SHOP domain to CLC
- Custom: Validation rules
- Use Case: Client management
