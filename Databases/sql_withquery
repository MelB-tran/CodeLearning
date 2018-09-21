Learning how to write WITH queries, which is basically having several seemingly unrelated subqueries and then joining them together,
as if they were tables/views
```
WITH ExtHealthProfileMapped(person_id
                          , healthCodeDef_AppId
                          , health_cde
                          , long_comment
                          , user_name
                          , job_name
                          , job_time)
     AS (SELECT hshpe.ID_NUM AS person_id
              , hcd.APPID AS health_Code_Def_AppId
              , hcd.HEALTH_CDE
              , hshpe.LONG_COMMENT
              , hshpe.USER_NAME
              , hshpe.JOB_NAME
              , hshpe.JOB_TIME
         FROM dbo.hdx_STUD_HLTH_PROFILE_EXT hshpe
              INNER JOIN dbo.HEALTH_CDE_DEF hcd ON hcd.HEALTH_CDE = hshpe.HEALTH_CDE),
     HealthProfilesFromQuestionnaire(person_id
                            , profile_AppId
                            , healthCode_AppId)
     AS (SELECT shp.id_num
              , shp.APPID
              , shp.HEALTH_CDE_DEF_APPID
         FROM dbo.STUD_HLTH_PROFILE shp
             LEFT JOIN dbo.HEALTH_CDE_GRPS hcg ON hcg.HEALTH_CDE_DEF_APPID = shp.HEALTH_CDE_DEF_APPID
            LEFT JOIN HendrixInternal..identity_list_student_current_v ilscv ON ilscv.id = shp.ID_NUM
         WHERE hcg.HEALTH_GRP_MASTER_APPID = 3)
    SELECT'HEALTH' as SESS_CDE
     , hpae.person_id as ID_NUM
                 , ehpm.health_cde as HEALTH_CDE
              , hpae.profile_AppId as PROFILE_APPID
              , hpae.healthCode_AppId as HEALTH_CDE_APPID
              , ehpm.long_comment
            , ehpm.user_name
            , ehpm.job_name
            , ehpm.job_time
         FROM ExtHealthProfileMapped ehpm
          JOIN HealthProfilesFromQuestionnaire hpae
              ON ehpm.person_id = hpae.person_id AND ehpm.healthCodeDef_AppId = hpae.healthCode_AppId
		    WHERE ehpm.person_id = @personId
```