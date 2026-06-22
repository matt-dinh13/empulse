---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Tracking of requests from user's browser/Business Rules"
domain: "Analysis Model"
element_id: 823852
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process request from user's browser

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Tracking of requests from user's browser/Business Rules

## 📝 Notes

Description:
This requirement describes processing of each request from user's browser. A request represents any interaction between user (only via his browser) and BSL (i.e. a request is sent every time when the user requests or sends any data to BSL). 

Input:

	
- request from user's browser


Algorithm:

Processing of initial request (i.e. first request after the user logs in to the system):

	
- System obtains the following information from the input request:
- ssoToken (it is an unique generated identifier assigned to the user's browser by the external system (e.g. OpenAM) responsible for logging users to HomerSelect SUIT systems)  
- username
- IP address
- cookie for audit (can be null)
	
- System generates tokenOfBrowserTab.
	
- If cookie for audit from the request is null, then the system generates a new cookie according to the rule Generate cookie for audit for user's browser. 
	
- System stores data about request to the audit log (see Structure of data stored to the audit log)
	
- System sends a response to the user's browser with the generated tokenOfBrowserTab and cookie from the previous step (if has been generated).  




Processing of each of following requests: 
System obtains the following information from the input request:
- ssoToken 
- username
- tokenOfBrowserTab (can be null) 
- salesroom
- IP address
- cookie for audit 
- fingerprint of client's browser (can be null)

A. tokenOfBrowserTab is provided 

	
- System compares Auditable data from the request with Auditable data from the last stored request (the key for comparison is a combination of ssoToken and tokenOfBrowsersTab). 
	
- If any of them has been changed, the system stores data about request to the audit log (see Structure of data stored to the audit log). 
	
- System sends a response to the user's browser.


B. tokenOfBrowserTab is not provided (i.e. the user sends a request from a new tab within an existing session)

	
- System generates tokenOfBrowserTab.
	
- System stores data about request to the audit log (see Structure of data stored to the audit log)
	
- System sends a response to the user's browser with the generated tokenOfBrowserTab


-----------------------------------------------------------------------------------------------------------
Auditable data:

	
- IP address
	
- salesroom


Structure of data stored to the audit log

	
- user name
	
- timestamp
	
- ip address (from the request)
	
- salesroom of logged user
	
- ssoToken id
	
- tokenOfBrowserTab id
	
- cookie for audit
	
- fingerprint of client's browser

## 🔗 Connections (1)

- → Dependency: [[Generate a cookie for audit for user's browser]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules for Tracking of requests from user's browser
