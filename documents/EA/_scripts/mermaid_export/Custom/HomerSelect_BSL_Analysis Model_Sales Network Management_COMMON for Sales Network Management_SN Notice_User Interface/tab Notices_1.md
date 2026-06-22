# tab Notices

```mermaid
graph TD
    n_09_206_Remove_notice["09.206 Remove notice"]
    n_09_205_Create_notice["09.205 Create notice"]
    Notices["Notices"]
    n_09_030_Show_partner["09.030 Show partner"]
    Create_notice["Create notice"]
    tab_Notices["tab Notices"]
    tab_Notices -->|unnamed| n_09_030_Show_partner
    Create_notice -->|unnamed| n_09_205_Create_notice
    Notices -->|unnamed| n_09_206_Remove_notice
```
