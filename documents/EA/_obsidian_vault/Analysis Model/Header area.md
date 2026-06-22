---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/General parts of the application"
domain: "Analysis Model"
element_id: 1817325
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Header area

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/General parts of the application

## 📝 Notes

Application header is part of application which is shown in upper part of every page of the system. This header offers both informational and functional value to users.

Basic user information
In the upper right corner it is shown information about currently logged user and salesroom and sales area (zone) which are currently active for this user.
System displays active salesroom with salesroom code. First part will be salesroom code (SALESROOM.CODE) and second part salesroom name (SALESROOM.NAME). Parts are separately with "-". (for example "012345 - Salesroom name")(Localization:shopLabel)
Salesroom can be empty. 
Beside the salesroom system displays user's active sales area ( User Setting.Value where User_Setting.User_Setting_Item = "ACTIVE_SALES_AREA") combining sales area code and value, salesroom and sales area is in one row (e.g. "Shop : 010639 - salesroom_010639 / Sales area: EA - East")(Localization:PRD_SalesArea). This field is visible only if GlobalParameter.UseSalesAreaAsZone = True.
Also button Logout is available in this part of header and can be used to securely log out user from application.
If user is acting as other user (that is User_detail->User_setting(.User_setting_item_code='SALES_AGENT').Value is filled) icon will be displayed next to the name of logged user. Tooltip (GEN_ActingUser_Tooltip) for this icon will contain full name and employee number of the other user.

Breadcrumb
Breadcrumb shows trace of users work in the system. It consists of Home link (containing main menu), and lastly used UCs and search. Each used UC or search will be added to the end of the breadcrumb, e.g.:
1. user displays contract XY
2. user displays contract search
3. user displays contract XY 
Breadcrumb result: Home -> Contract XY -> Contract search -> Contract XY
Max number of elements in breadcrumb is defined by system parameter. When max number is reached and new element is added, the oldest element is removed.
Each breadcrumb element works as an active links and user can use them to instantly jump to menu, appropriate UC or search use case.
In case of search, its criteria are pre-filled with values used in last search and results for this criteria are shown. When no criteria is found search is not pre-filled.
In case the all preconditions of calling use case are not met then MSG_INSUFFICIENT_PRIVILEGES is displayed and user is redirect on main page.

Inbox link
This active hyperlink allows user to jump into his inbox. In cases when inbox contains unread messages, information about number of unread messages is displayed.

CRM link
In case user has left CRM screen for communication recording and he has elaborated work on communication, icon for return to CRM appears. User can use this icon to switch to the elaborated communication record screen and continue with his undone work

## 📊 Appears In (1 diagrams)

- Custom: General parts of the application
