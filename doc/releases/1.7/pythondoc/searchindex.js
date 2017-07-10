Search.setIndex({docnames:["index","modules","streamsx","streamsx.ec","streamsx.rest","streamsx.rest_errors","streamsx.rest_primitives","streamsx.scripts","streamsx.scripts.streamsx-runner","streamsx.spl","streamsx.spl.op","streamsx.spl.spl","streamsx.spl.toolkit","streamsx.spl.types","streamsx.topology","streamsx.topology.context","streamsx.topology.mqtt","streamsx.topology.schema","streamsx.topology.tester","streamsx.topology.tester_runtime","streamsx.topology.topology"],envversion:51,filenames:["index.rst","modules.rst","streamsx.rst","streamsx.ec.rst","streamsx.rest.rst","streamsx.rest_errors.rst","streamsx.rest_primitives.rst","streamsx.scripts.rst","streamsx.scripts.streamsx-runner.rst","streamsx.spl.rst","streamsx.spl.op.rst","streamsx.spl.spl.rst","streamsx.spl.toolkit.rst","streamsx.spl.types.rst","streamsx.topology.rst","streamsx.topology.context.rst","streamsx.topology.mqtt.rst","streamsx.topology.schema.rst","streamsx.topology.tester.rst","streamsx.topology.tester_runtime.rst","streamsx.topology.topology.rst"],objects:{"":{streamsx:[2,0,0,"-"]},"streamsx.ec":{CustomMetric:[3,1,1,""],MetricKind:[3,1,1,""],channel:[3,3,1,""],domain_id:[3,3,1,""],get_application_configuration:[3,3,1,""],instance_id:[3,3,1,""],is_standalone:[3,3,1,""],job_id:[3,3,1,""],local_channel:[3,3,1,""],local_max_channels:[3,3,1,""],max_channels:[3,3,1,""],pe_id:[3,3,1,""]},"streamsx.ec.CustomMetric":{value:[3,2,1,""]},"streamsx.ec.MetricKind":{Counter:[3,2,1,""],Gauge:[3,2,1,""],Time:[3,2,1,""]},"streamsx.rest":{StreamingAnalyticsConnection:[4,1,1,""],StreamsConnection:[4,1,1,""]},"streamsx.rest.StreamingAnalyticsConnection":{get_domain:[4,4,1,""],get_domains:[4,4,1,""],get_installations:[4,4,1,""],get_instance:[4,4,1,""],get_instances:[4,4,1,""],get_resources:[4,4,1,""],get_streaming_analytics:[4,4,1,""],resource_url:[4,2,1,""]},"streamsx.rest.StreamsConnection":{get_domain:[4,4,1,""],get_domains:[4,4,1,""],get_installations:[4,4,1,""],get_instance:[4,4,1,""],get_instances:[4,4,1,""],get_resources:[4,4,1,""],resource_url:[4,2,1,""],session:[4,2,1,""]},"streamsx.rest_errors":{ViewNotFoundError:[5,5,1,""]},"streamsx.rest_errors.ViewNotFoundError":{args:[5,2,1,""],with_traceback:[5,4,1,""]},"streamsx.rest_primitives":{ActiveService:[6,1,1,""],ActiveVersion:[6,1,1,""],Domain:[6,1,1,""],ExportedStream:[6,1,1,""],Host:[6,1,1,""],ImportedStream:[6,1,1,""],Installation:[6,1,1,""],Instance:[6,1,1,""],Job:[6,1,1,""],Metric:[6,1,1,""],Operator:[6,1,1,""],OperatorConnection:[6,1,1,""],OperatorOutputPort:[6,1,1,""],PE:[6,1,1,""],PEConnection:[6,1,1,""],PublishedTopic:[6,1,1,""],Resource:[6,1,1,""],ResourceAllocation:[6,1,1,""],ResourceTag:[6,1,1,""],StreamingAnalyticsService:[6,1,1,""],View:[6,1,1,""],ViewItem:[6,1,1,""],get_view_obj:[6,3,1,""]},"streamsx.rest_primitives.ActiveService":{leader:[6,2,1,""],processId:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],startTime:[6,2,1,""],status:[6,2,1,""],type:[6,2,1,""]},"streamsx.rest_primitives.ActiveVersion":{architecture:[6,2,1,""],build_version:[6,2,1,""],edition_name:[6,2,1,""],full_product_version:[6,2,1,""],minimum_os_base_version:[6,2,1,""],minimum_os_patch_version:[6,2,1,""],product_name:[6,2,1,""],product_version:[6,2,1,""]},"streamsx.rest_primitives.Domain":{creationTime:[6,2,1,""],creationuser:[6,2,1,""],get_active_services:[6,4,1,""],get_hosts:[6,4,1,""],get_instances:[6,4,1,""],get_resource_allocations:[6,4,1,""],get_resources:[6,4,1,""],id:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.ExportedStream":{get_operator_output_port:[6,4,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.Host":{ipAddress:[6,2,1,""],name:[6,2,1,""],processorCount:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],restrictedTags:[6,2,1,""],services:[6,2,1,""],status:[6,2,1,""],tag:[6,2,1,""]},"streamsx.rest_primitives.ImportedStream":{refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.Installation":{architecture:[6,2,1,""],buildVersion:[6,2,1,""],editionName:[6,2,1,""],fullProductVersion:[6,2,1,""],minimumOSBaseVersion:[6,2,1,""],minimumOSPatchVersion:[6,2,1,""],productName:[6,2,1,""],productVersion:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.Instance":{creationTime:[6,2,1,""],creationuser:[6,2,1,""],get_active_services:[6,4,1,""],get_domain:[6,4,1,""],get_exported_streams:[6,4,1,""],get_hosts:[6,4,1,""],get_imported_streams:[6,4,1,""],get_job:[6,4,1,""],get_jobs:[6,4,1,""],get_operator_connections:[6,4,1,""],get_operators:[6,4,1,""],get_pe_connections:[6,4,1,""],get_pes:[6,4,1,""],get_published_topics:[6,4,1,""],get_resource_allocations:[6,4,1,""],get_views:[6,4,1,""],health:[6,2,1,""],id:[6,2,1,""],owner:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],startTime:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.Job":{applicationName:[6,2,1,""],cancel:[6,4,1,""],get_domain:[6,4,1,""],get_hosts:[6,4,1,""],get_instance:[6,4,1,""],get_operator_connections:[6,4,1,""],get_operators:[6,4,1,""],get_pe_connections:[6,4,1,""],get_pes:[6,4,1,""],get_resource_allocations:[6,4,1,""],get_views:[6,4,1,""],health:[6,2,1,""],id:[6,2,1,""],jobGroup:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],startedBy:[6,2,1,""],status:[6,2,1,""],submitTime:[6,2,1,""]},"streamsx.rest_primitives.Metric":{description:[6,2,1,""],lastTimeRetrieved:[6,2,1,""],metricKind:[6,2,1,""],metricType:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],value:[6,2,1,""]},"streamsx.rest_primitives.Operator":{get_metrics:[6,4,1,""],indexWithinJob:[6,2,1,""],name:[6,2,1,""],operatorKind:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.OperatorConnection":{id:[6,2,1,""],refresh:[6,4,1,""],required:[6,2,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.OperatorOutputPort":{indexWithinOperator:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],streamName:[6,2,1,""]},"streamsx.rest_primitives.PE":{health:[6,2,1,""],id:[6,2,1,""],indexWithinJob:[6,2,1,""],launchCount:[6,2,1,""],optionalConnections:[6,2,1,""],pendingTracingLevel:[6,2,1,""],processId:[6,2,1,""],refresh:[6,4,1,""],relocatable:[6,2,1,""],requiredConnections:[6,2,1,""],resourceType:[6,2,1,""],restartable:[6,2,1,""],status:[6,2,1,""],statusReason:[6,2,1,""],tracingLevel:[6,2,1,""]},"streamsx.rest_primitives.PEConnection":{id:[6,2,1,""],refresh:[6,4,1,""],required:[6,2,1,""],resourceType:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.PublishedTopic":{schema:[6,2,1,""],topic:[6,2,1,""]},"streamsx.rest_primitives.Resource":{get_resource:[6,4,1,""],name:[6,2,1,""],refresh:[6,4,1,""]},"streamsx.rest_primitives.ResourceAllocation":{applicationResource:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],schedulerStatus:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.ResourceTag":{definition_format_properties:[6,2,1,""],description:[6,2,1,""],name:[6,2,1,""],properties_definition:[6,2,1,""],reserved:[6,2,1,""]},"streamsx.rest_primitives.StreamingAnalyticsService":{cancel_job:[6,4,1,""],get_instance_status:[6,4,1,""],start_instance:[6,4,1,""],stop_instance:[6,4,1,""]},"streamsx.rest_primitives.View":{activateOption:[6,2,1,""],bufferCapacitySeconds:[6,2,1,""],bufferCapacityTuples:[6,2,1,""],bufferCapacityUnits:[6,2,1,""],description:[6,2,1,""],get_domain:[6,4,1,""],get_instance:[6,4,1,""],get_job:[6,4,1,""],get_view_items:[6,4,1,""],id:[6,2,1,""],logicalOperatorName:[6,2,1,""],maximumTupleRate:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],start_data_fetch:[6,4,1,""],stop_data_fetch:[6,4,1,""]},"streamsx.rest_primitives.ViewItem":{collectionTime:[6,2,1,""],data:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.spl":{op:[10,0,0,"-"],spl:[11,0,0,"-"],toolkit:[12,0,0,"-"],types:[13,0,0,"-"]},"streamsx.spl.op":{Expression:[10,1,1,""],Invoke:[10,1,1,""],Map:[10,1,1,""],Sink:[10,1,1,""],Source:[10,1,1,""]},"streamsx.spl.op.Expression":{expression:[10,6,1,""],spl_json:[10,4,1,""]},"streamsx.spl.op.Invoke":{attribute:[10,4,1,""],expression:[10,4,1,""],output:[10,4,1,""],params:[10,2,1,""]},"streamsx.spl.op.Map":{attribute:[10,4,1,""],expression:[10,4,1,""],output:[10,4,1,""],params:[10,2,1,""],stream:[10,2,1,""]},"streamsx.spl.op.Sink":{attribute:[10,4,1,""],expression:[10,4,1,""],output:[10,4,1,""],params:[10,2,1,""]},"streamsx.spl.op.Source":{attribute:[10,4,1,""],expression:[10,4,1,""],output:[10,4,1,""],params:[10,2,1,""],stream:[10,2,1,""]},"streamsx.spl.spl":{filter:[11,1,1,""],for_each:[11,1,1,""],ignore:[11,3,1,""],map:[11,1,1,""],pipe:[11,3,1,""],sink:[11,3,1,""],source:[11,1,1,""]},"streamsx.spl.toolkit":{add_toolkit:[12,3,1,""]},"streamsx.spl.types":{Timestamp:[13,1,1,""],float32:[13,3,1,""],float64:[13,3,1,""],int16:[13,3,1,""],int32:[13,3,1,""],int64:[13,3,1,""],int8:[13,3,1,""],rstring:[13,3,1,""],uint16:[13,3,1,""],uint32:[13,3,1,""],uint64:[13,3,1,""],uint8:[13,3,1,""]},"streamsx.spl.types.Timestamp":{datetime:[13,4,1,""],from_datetime:[13,6,1,""],machine_id:[13,2,1,""],nanoseconds:[13,2,1,""],seconds:[13,2,1,""],time:[13,4,1,""],tuple:[13,4,1,""]},"streamsx.topology":{context:[15,0,0,"-"],mqtt:[16,0,0,"-"],schema:[17,0,0,"-"],tester:[18,0,0,"-"],tester_runtime:[19,0,0,"-"],topology:[20,0,0,"-"]},"streamsx.topology.context":{ConfigParams:[15,1,1,""],ContextTypes:[15,1,1,""],JobConfig:[15,1,1,""],SubmissionResult:[15,1,1,""],submit:[15,3,1,""]},"streamsx.topology.context.ConfigParams":{FORCE_REMOTE_BUILD:[15,2,1,""],JOB_CONFIG:[15,2,1,""],SERVICE_NAME:[15,2,1,""],STREAMS_CONNECTION:[15,2,1,""],VCAP_SERVICES:[15,2,1,""]},"streamsx.topology.context.ContextTypes":{ANALYTICS_SERVICE:[15,2,1,""],BUILD_ARCHIVE:[15,2,1,""],BUNDLE:[15,2,1,""],DISTRIBUTED:[15,2,1,""],STANDALONE:[15,2,1,""],STANDALONE_BUNDLE:[15,2,1,""],STREAMING_ANALYTICS_SERVICE:[15,2,1,""],TOOLKIT:[15,2,1,""]},"streamsx.topology.context.JobConfig":{add:[15,4,1,""],target_pe_count:[15,2,1,""],tracing:[15,2,1,""]},"streamsx.topology.context.SubmissionResult":{job:[15,2,1,""]},"streamsx.topology.mqtt":{MqttStreams:[16,1,1,""]},"streamsx.topology.mqtt.MqttStreams":{publish:[16,4,1,""],subscribe:[16,4,1,""]},"streamsx.topology.schema":{CommonSchema:[17,1,1,""],StreamSchema:[17,1,1,""]},"streamsx.topology.schema.CommonSchema":{Binary:[17,2,1,""],Json:[17,2,1,""],Python:[17,2,1,""],String:[17,2,1,""],XML:[17,2,1,""]},"streamsx.topology.schema.StreamSchema":{extend:[17,4,1,""],schema:[17,4,1,""],spl_json:[17,4,1,""]},"streamsx.topology.tester":{Tester:[18,1,1,""]},"streamsx.topology.tester.Tester":{add_condition:[18,4,1,""],contents:[18,4,1,""],local_check:[18,4,1,""],setup_distributed:[18,6,1,""],setup_standalone:[18,6,1,""],setup_streaming_analytics:[18,6,1,""],streams_connection:[18,2,1,""],submission_result:[18,2,1,""],test:[18,4,1,""],tuple_check:[18,4,1,""],tuple_count:[18,4,1,""]},"streamsx.topology.tester_runtime":{Condition:[19,1,1,""]},"streamsx.topology.tester_runtime.Condition":{fail:[19,4,1,""],valid:[19,2,1,""]},"streamsx.topology.topology":{PendingStream:[20,1,1,""],Routing:[20,1,1,""],Stream:[20,1,1,""],Topology:[20,1,1,""],View:[20,1,1,""],Window:[20,1,1,""]},"streamsx.topology.topology.PendingStream":{complete:[20,4,1,""],is_complete:[20,4,1,""]},"streamsx.topology.topology.Routing":{HASH_PARTITIONED:[20,2,1,""],KEY_PARTITIONED:[20,2,1,""],ROUND_ROBIN:[20,2,1,""]},"streamsx.topology.topology.Stream":{as_json:[20,4,1,""],as_string:[20,4,1,""],autonomous:[20,4,1,""],end_low_latency:[20,4,1,""],end_parallel:[20,4,1,""],filter:[20,4,1,""],flat_map:[20,4,1,""],for_each:[20,4,1,""],isolate:[20,4,1,""],last:[20,4,1,""],low_latency:[20,4,1,""],map:[20,4,1,""],multi_transform:[20,4,1,""],name:[20,2,1,""],parallel:[20,4,1,""],print:[20,4,1,""],publish:[20,4,1,""],resource_tags:[20,2,1,""],sink:[20,4,1,""],transform:[20,4,1,""],union:[20,4,1,""],view:[20,4,1,""]},"streamsx.topology.topology.Topology":{name:[20,2,1,""],namespace:[20,2,1,""],source:[20,4,1,""],subscribe:[20,4,1,""]},"streamsx.topology.topology.View":{initialize_rest:[20,4,1,""],start_data_fetch:[20,4,1,""],stop_data_fetch:[20,4,1,""]},"streamsx.topology.topology.Window":{trigger:[20,4,1,""]},streamsx:{ec:[3,0,0,"-"],rest:[4,0,0,"-"],rest_errors:[5,0,0,"-"],rest_primitives:[6,0,0,"-"],scripts:[7,0,0,"-"],spl:[9,0,0,"-"],topology:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:exception","6":"py:staticmethod"},terms:{"0ul":10,"2ul":10,"abstract":20,"boolean":[3,10,11,16],"break":11,"byte":[17,20],"case":[10,11,14,18,20],"class":[0,2,3,4,6,9,10,13,15,16,17,18,19,20],"default":[10,11,15,16,17,18,20],"enum":[3,17,20],"export":6,"final":11,"float":[10,13],"function":[1,3,4,9,10,15,17,20],"import":[6,11,18,20],"int":[3,6,13,16,18,20],"long":[6,14,16],"new":[10,14,15,17,20],"null":14,"public":[16,20],"return":[3,4,5,6,10,11,13,15,17,18,20],"static":[10,13,18],"switch":14,"true":[3,4,6,11,15,16,18,20],"while":[14,18],And:14,For:[0,2,4,6,10,11,14,15,17,18,20],Has:20,Not:20,One:20,PEs:[3,4,6,15],The:[0,2,3,4,6,10,11,13,14,15,16,17,18,20],Then:[10,14],There:4,These:[10,11,15],Use:[11,14,15,17,20],Used:[15,18,20],Using:20,With:[3,14,20],__call__:[3,11],__dict__:3,__enter__:[3,11,20],__exit__:[3,11,20],__getattr__:15,__getstate__:3,__init__:[3,11,20],__iter__:11,__setstate__:3,__traceback__:5,_resourceel:6,_type:10,_valu:10,_view:6,abilt:14,abl:[11,15],about:6,abov:11,access:[0,2,3,4,6,15,16,20],across:[3,4,11,14,15,18,20],act:[14,18],action:16,activ:6,activateopt:6,activeservic:6,activevers:6,adapt:[10,20],add:[12,15,18],add_condit:18,add_toolkit:12,added:[10,11,16,18,20],adding:20,addit:[6,10,11,15,16,18,20],address:[6,10],addtion:4,admin:20,advanc:[14,20],advantag:[0,2,10,11,20],after:[10,11,15,18,20],against:[11,15,18,20],agg:20,aggreg:20,all:[4,6,11,14,15,17,18,20],alloc:6,allow:[0,2,4,6,10,11,14,15,16,17,18,20],alreadi:[14,20],also:[0,2,11,18,20],altern:20,alwai:[11,20],anaconda:[0,2,20],analyt:[1,3,6,10,14,15,18,20],analytics_servic:15,analyz:[14,20],ananconda:[0,2],ani:[0,2,3,6,9,10,11,13,14,16,17,18,20],anoth:[10,11,17,20],api:[1,3,14,15,18,20],appli:16,applic:[1,3,4,6,10,13,14,15,16,17,18,19,20],applicationnam:6,applicationresourc:6,approach:[6,14],arbitrari:[10,11,18],architectur:[6,15],archiv:15,aren:20,arg:[5,11],argument:[11,20],around:4,arriv:[11,14,20],artifact:15,as_json:20,as_str:20,ascii:[11,17],assert:18,assert_on_fail:18,assertequ:18,assertionerror:18,assign:[6,10,11,15,18,20],associ:[6,11,15,18,20],assum:4,asynchron:20,attempt:16,attr:11,attribthreshold:11,attribut:[2,6,9,10,17,18,20],authent:16,author:4,automat:[6,10,16],autonom:20,avail:[0,2,3,4,16,20],back:[15,20],background:20,backward:11,base:[3,4,5,6,10,11,13,14,15,16,17,18,19,20],batteri:11,beacon:10,becam:18,becaus:6,becom:[9,11,18,19],been:[3,6,10,15,16,20],befor:[15,16,18,20],begin:20,behavior:[3,18,20],being:[0,2,3,11,14,16,17,18,20],belong:6,between:[3,6,14,17,20],beyond:11,binari:[17,20],bit:3,blob:20,block:16,bluemix:[0,2,3,4,6,14,15,18,20],bool:[6,15,18,20],both:[11,20],bound:[4,11],boundari:20,bring:10,brittl:11,broker:16,buffer:[6,16,20],buffer_tim:20,buffercapacitysecond:6,buffercapacitytupl:6,buffercapacityunit:6,build:[0,2,6,10,14,15,20],build_arch:15,build_vers:6,buildvers:6,built:[0,2,15,18,20],bundl:[15,20],call:[4,9,11,14,15,18,20],callabl:[2,9,11,14,17,18],can:[0,2,4,6,10,11,14,15,17,18,19,20],cancel:[6,18],cancel_job:6,cannot:[5,6,20],capac:6,card:14,caus:[16,18],cdr:14,cento:15,certif:16,cfg:15,chang:[6,11,20],channel:[3,20],charact:14,characterist:20,check:18,checker:18,checkpoint:[11,20],child:14,citi:10,claus:[2,9],client:[16,20],clientid:16,clock:13,close:11,cloud:[0,2,3,6,14,15,18,20],cluster:[0,2,15],code:[0,2,3,10,11,15,18,19,20],collect:[6,10],collectiontim:6,com:[17,20],combin:18,command:15,commandtimeout:16,common:[10,13,17],commonschema:[17,20],compat:[11,18,20],compil:[11,15,20],complet:[3,11,15,16,18,20],compon:13,composit:20,comput:[14,20],condit:[18,19],config:[15,16,18],configparam:15,configur:[0,2,3,4,6,10,15,16,18],connect:[3,4,6,10,14,15,16,17,18,20],connector:16,consist:[6,20],consol:[0,2,15,20],constain:17,constant:[10,15],constraint:10,constructor:11,consum:[11,14,20],contain:[3,4,6,10,11,15,16,17,18,19,20],content:[0,1,4,6,11,18,20],context:[1,2,10,11,14,18,19,20],contexttyp:[15,20],continu:[3,20],continuum:[0,2],control:15,conveni:15,convers:[11,20],convert:[10,11,13,16,17,20],coordin:3,copi:[3,10,11,20],correct:4,correctli:18,correl:[14,20],correspond:[3,13],could:[4,20],count:[3,10,15,18,20],count_:3,counter:[3,6],creat:[3,4,6,9,10,11,13,15,16,17,18,20],creation:[14,15,18,20],creationtim:6,creationus:6,credenti:[3,6,15],critic:15,cross:20,ctxtype:[15,18],current:[3,4,6,10,15,18,20],custom:[3,6,11,20],custommetr:[3,20],data:[3,6,10,14,15,18,20],data_directori:15,databas:3,datetim:[13,20],debug:[6,15],declar:[10,18,20],decor:[3,9,11],decorati:11,dedupl:10,deep:20,deepcopi:20,def:[3,11,18,20],defaullt:20,defin:[6,10,11,13,15,16,17,18,20],definit:[0,2,6,11,13,17],definition_format_properti:6,degre:20,del:3,denot:20,depend:[10,11],deprec:15,deriv:[10,11],dervi:20,describ:6,descript:[3,6,20],design:[6,18],detail:[0,2,10,14,15,20],detect:[13,16],determin:[6,15,20],determinist:20,develop:[10,14,15,20],devlop:15,diagnos:15,dict:[3,6,10,15,17,20],dictionari:[2,3,9,15,20],differ:[6,11,13,17,20],differenti:20,digit:[11,17],directli:[18,20],directori:[12,15,16],disabl:[4,16],disadvantag:11,discard:11,disconnect:[6,20],displai:20,distribut:[0,1,2,4,14,15,17,18,20],doc:[11,20],docpi:11,docstr:11,document:[4,10,17],doe:[3,11,17,20],domain:[0,2,4,6,10,15,18],domain_id:3,dot:15,download:[0,2],downstream:20,drop:[14,20],due:[3,20],durat:[3,20],dure:[14,15,18],dynam:[14,18],each:[3,6,10,11,14,15,16,17,18,20],echo:20,edit:6,edition_nam:6,editionnam:6,effect:[11,18,20],either:[14,16,17,20],element:[3,5,6,11,15,18,20],embed:[0,2,15],empti:[10,11,17,20],enabl:[0,2,4,16],encod:14,encrypt:16,end:20,end_low_lat:20,end_parallel:20,enforc:13,ensur:[11,18,20],entir:14,entri:[4,18],enumer:3,environ:[0,2,4,15,17,18],epoch:[3,6,13],equal:11,equival:[11,20],error:[6,11,15,18],etc:[14,17],evalu:[11,18,20],even:[14,15,20],event:[14,20],everi:[0,2,14,20],eviron:20,exact:[14,18],exactli:18,exampl:[3,4,6,10,11,14,15,17,18,20],exc_tb:3,exc_typ:[3,11,20],exc_val:3,exc_valu:[11,20],excel:20,except:[5,18],exclud:20,exclude_packag:20,exec:3,execut:[0,1,2,11,14,15,17,18,19,20],exist:[3,4,11,14,15,17,18,20],exlud:11,exop:10,expand:[0,2],expect:[11,18],explicit:10,explicitli:10,explictli:11,exportedstream:6,expos:[3,4,6],express:[6,10,20],extend:[4,17],extens:[17,20],extensionoper:10,extent:11,extern:[3,10,18,20],extract:11,fail:[6,18,19,20],failur:[6,14,16,18],fals:[3,4,6,15,16,17,18,20],fed:20,feedback:20,fetch:[6,20],field:11,file:[11,15,16,20],filenam:4,filesink:10,filter:[3,10,11,14,18,20],finit:[15,20],first:[11,16,17,18,20],five:20,fix:[6,20],flag:15,flat_map:20,flatten:20,flattern:20,flexibl:11,float32:[11,13,17],float64:[10,11,13,17,20],flow:[10,20],flush:[11,20],follow:[11,14,16,17,18,20],fom:11,foobar:16,for_each:[11,20],forc:[6,15,20],force_object:20,force_remote_build:[15,18],forcefulli:6,forceremotebuild:15,form:[11,16],formal:11,format:[4,15,17],fourth:11,fragment:18,free:10,from:[0,2,3,4,6,9,10,13,14,15,16,17,18,20],from_datetim:13,frozenset:20,full:[6,16],full_product_vers:6,fullproductvers:6,func:20,further:4,futur:[11,18,20],gaug:[3,6],gener:[10,11,15,16,20],get:[3,6,13,20],get_active_servic:6,get_application_configur:3,get_domain:[4,6],get_exported_stream:6,get_host:6,get_imported_stream:6,get_inst:[4,6],get_instal:4,get_instance_statu:[4,6],get_job:[4,6],get_metr:6,get_oper:6,get_operator_connect:6,get_operator_output_port:6,get_p:6,get_pe_connect:6,get_published_top:6,get_resourc:[4,6],get_resource_alloc:6,get_streaming_analyt:4,get_view:6,get_view_item:6,get_view_obj:6,getter:11,gettimestamp:10,github:16,given:6,global:3,granular:6,graph:[10,15,18,20],greater:18,group:[6,15],guarante:20,handl:[11,14,16,20],hardwar:6,has:[0,2,3,4,6,10,11,14,15,17,19,20],hash:20,hash_partit:20,hasn:16,have:[6,10,11,15,16,18,20],health:[6,18],healthi:[6,18],hello:[18,20],here:18,high:[14,20],hint:15,hoc:3,hold:3,host:[0,2,3,6,14,15,20],hostid:16,hot:6,how:[10,11,14,15,20],howev:11,html:[11,20],http:[0,2,4,11,16,20],ibm:[1,3,4,6,10,14,15,17,18,20],ibmstream:16,ident:[10,13],identif:11,identifi:[3,4,6,10,11,13,15,16,18,20],ignor:[11,15,20],immedi:20,immut:20,implement:[0,2,6,11,14,17,18,20],implicitli:[10,11],importedstream:6,impos:3,improv:15,includ:[0,2,4,6,10,11,12,14,15,17,18,20],include_packag:20,increas:11,indefinit:16,independ:[6,11,14,20],index:[0,6,11,17],indexwithinjob:6,indexwithinoper:6,indic:[3,6,16,20],infinit:[15,20],info:15,inform:[3,4,6,14,15,16,20],ingest:[14,20],initi:[2,3,9,14],initialize_rest:20,initialvalu:3,input:[10,11,15,18,20],insert:[18,20],instal:[0,2,4,6,15,18,20],instanc:[0,2,3,4,6,10,11,15,18,20],instance_id:3,insuffici:11,int16:[13,17],int32:[10,11,13,20],int64:13,int8:[13,17],integ:[3,10,16,20],intend:[15,18],interact:[0,2,4,18],interchang:17,interestingsensor:11,intermedi:15,intern:16,interoper:17,introduc:20,invoc:[10,11,20],invok:[2,3,9,11,13,17,20],ipaddress:6,is_complet:20,is_standalon:3,isol:[15,18,20],issu:15,item:[4,10,20],iter:[10,11,20],iterationcount:10,its:[3,4,6,10,11,14,17,18,20],jan:13,januari:3,java:[6,14],jmx:15,job:[3,4,6,15,18,20],job_config:15,job_group:15,job_id:[3,6],job_nam:[6,15],jobconfig:15,jobconfigoverlai:15,jobgroup:6,jobs_count:4,json:[4,6,15,17,20],json_active_vers:6,json_formatted_str:17,json_rep:6,json_resource_tag:6,json_view:6,jsonencod:[17,20],keelaliveinterv:16,keep:20,keepal:16,keepaliveinterv:16,kei:[3,11,15,16,17,20],key_partit:20,keystor:16,keystorepassword:16,keyword:11,keyword_onli:11,kind:[3,6,10,11],knowledg:14,knowledgecent:20,known:4,kwarg:11,lambda:[10,18,20],lamda:10,languag:[0,2,6,10,14,17,20],last:[14,16,20],lasttimeretriev:6,later:[3,15,18],latest:6,launchcount:6,leader:6,least:[11,14,18],len:4,length:14,less:[11,17],letter:[11,17],level:[14,15,20],librari:[0,2,11,20],lifetim:11,like:[9,11],line:15,linux:3,list:[2,4,6,9,10,17,18,20],load:[17,20],local:[3,15,18],local_channel:3,local_check:18,local_max_channel:3,localdomain:4,localhost:16,locat:[3,5,12,15],log:15,logic:[6,17,20],logicaloperatornam:6,longer:[16,20],lookup:10,loop:20,lost:[13,14],low_lat:20,machin:[13,14,20],machine_id:13,made:[18,20],mai:[0,2,3,6,9,10,11,13,14,15,16,17,18,20],main:15,maintain:[4,11,20],make:[4,11,18],manag:[0,2,4,11,20],mandatori:11,mani:[10,14],manual:[4,6],map:[10,11,15,16,17,18,20],mark:[11,19],match:[4,6,10,11,14,18,20],max:20,max_channel:3,maximum:[3,6,16],maximumtupler:6,mean:11,measur:[6,20],mechan:20,merg:20,messag:[14,16,20],messagequeues:16,met:18,metadata:6,meth:[18,20],method:[4,6,10,11,15,17,18,20],metric:[3,6,20],metrickind:[3,6],metrictyp:6,microservic:[2,6],microsoft:20,middl:11,might:10,million:[14,20],millisecond:[3,16],minimum:6,minimum_os_base_vers:6,minimum_os_patch_vers:6,minimumosbasevers:6,minimumospatchvers:6,minut:20,mitig:11,mix:11,mode:[3,15,18],model:[11,18,20],modif:[0,2,20],modifi:[6,10,18,20],modul:[0,1],monitor:[3,18],more:[3,6,11,14,20],most:[3,6,20],mqs:16,mqstream:16,mqtt:[2,14],mqtt_publish:16,mqtt_stream:16,mqttstream:16,multi:14,multi_transform:20,multipl:[4,6,14,15,20],must:[0,2,3,6,10,11,13,14,15,17,18,19,20],my_metr:3,myf:3,myfunc:11,naiv:13,name:[2,3,4,6,9,10,14,15,17,18,19,20],namespac:20,nanosecond:13,natur:17,necessari:20,need:[3,4,10,11,15,16],negative_metr:20,negativesenti:20,nest:[3,20],network:14,never:[18,19,20],newsingest:15,non:[11,20],none:[2,3,4,6,9,10,15,17,18,19,20],nor:20,normal:[14,18],notat:15,note:[11,15],notset:15,now:20,number:[0,2,3,6,10,11,14,15,16,18,20],obj:[3,17],object:[0,2,3,4,6,10,11,13,15,16,17,18,19,20],observ:3,obtain:[4,11,20],occupi:14,occur:[6,10,15,20],occurr:3,off:6,omit:18,onc:[9,11,14,18,19,20],one:[3,6,10,11,14,18,20],onli:[3,6,10,11,14,15,16,17,18,20],onnect:16,onto:15,open:[11,20],oper:[1,3,4,6,9,13,14,15,18],operatorconnect:6,operatorkind:6,operatoroutputport:6,oport:20,optim:20,option:[0,2,4,6,11,15,16,20],optionalconnect:6,order:[10,11,18,20],org:[11,16,20],other:[3,6,9,11,14,15,17,20],otherwis:[6,10,11,16,18,20],ouput:10,out:[11,20],outgo:10,output:[2,6,9,11,20],outsid:[3,4],outut:[10,11],over:20,overrid:15,overview:[1,2,4,9],own:[6,14,20],owner:6,packag:[0,20],page:0,parallel:[3,20],param:[2,9,11,13],paramet:[3,4,6,10,11,12,13,15,17,18,19,20],parameter:10,parent:14,part:[9,11],parti:20,partiallyconnect:6,partiallyhealthi:6,partiallyunhealthi:6,particular:16,partit:15,pass:[2,3,9,10,15,17,18,20],passw0rd:4,password:[4,15,16,18],patch:6,path:[0,2,15,16],path_to_python_instal:[0,2],pathnam:16,payload:[17,20],pe_id:3,peconnect:6,pend:[6,20],pending_sourc:20,pendingstream:20,pendingtracinglevel:6,per:[6,10,14,20],perform:[15,18,20],period:[10,16,20],permiss:15,pes:6,physic:20,pickabl:20,pickl:[11,20],picklabl:[17,20],ping:16,pipe:11,pipelin:20,place:[10,20],placehold:20,plan:4,platform:[0,2,3,6,14,15,18,20],point:[3,4,20],polici:20,popul:20,port:[3,6,10,11,16,20],posit:[2,9,17,20],positional_or_keyword:11,positive_metr:20,positivesenti:20,posix:13,possibl:6,potenti:[10,20],pre:[0,2,20],preced:20,preload:15,premis:[1,14,20],prepend:20,present:[6,18,20],pressur:11,prevent:20,primari:20,primit:[0,2,6,9,11,20],print:[4,6,11,16,20],printtupl:11,prior:16,privat:[10,11,16,17],process:[0,2,3,6,9,10,14,15,16,17,18],processid:6,processor:6,processorcount:6,produc:[10,11,15,20],product:6,product_nam:6,product_vers:6,productnam:6,productvers:6,program:[17,20],programmat:4,properti:[3,6,15,16],properties_definit:6,provid:[3,4,6,9,10,11,14,15,20],pub_stream:16,publish:[2,6,16,17,20],publishedtop:6,punctuat:11,purpos:11,python:[1,3,4,6,9,10,14,15,16,17,18,20],pythonhom:[0,2],pyword:20,qos:16,qualiti:16,queue:[6,20],quickli:[14,20],rais:[3,4,5,6,18,20],rand:[18,20],random:[18,20],rang:[3,11],rate:[10,14,20],rather:[10,20],read:[10,11,15,17,20],readabl:11,reading_tim:10,real:[14,20],receiv:[14,16,17,18,20],recent:[6,20],recommend:[3,6,14],reconnect:16,reconnectionbound:16,record:14,redhat:15,reduct:11,refer:[4,10,20],reflect:6,refresh:6,regard:4,regardless:[6,14,17,18,20],region:[3,11,20],regular:6,rel:16,relat:[10,19,20],relationship:14,reli:20,reloc:[6,15],relocat:6,remain:[11,18],remot:[15,20],remov:[3,6,10,17],repeat:20,replic:3,repres:[3,6,10,11,15,17,20],represent:[11,15,17,20],request:4,requir:[3,6,10,11,13,14,15,16,18,20],requiredconnect:6,reserv:[6,11],resolut:13,resourc:[3,4,5,6,14,15,17,20],resource_tag:20,resource_url:4,resourcealloc:6,resourcetag:6,resourcetyp:6,respect:10,respons:[6,13],rest:[1,6,15,18,20],rest_client:6,rest_error:[1,2],rest_primit:[1,2],restart:[6,11,15,18,20],restrictedtag:6,result:[11,15,17,18,20],retain:[16,20],retriev:[4,6,20],reus:20,robust:11,root:4,round_robin:20,rout:20,rstring:[10,11,13,17],run:[0,2,3,4,6,11,14,15,17,18,20],runnabl:20,runner:[2,7],runtim:[0,2,11,15,18,19,20],sab:[15,20],salt:20,same:[3,10,13,14,15,17,20],sampl:[16,20],sample_s:20,save:3,scala:14,scalabl:[14,20],schedul:[6,15],schedulerstatu:6,schema:[2,6,10,11,14,20],scheme:[11,17],score:[17,18],script:[1,2],search:0,second:[6,10,11,13,14,16,20],section:[0,2],secur:3,see:[0,2,11,15,20],seen:[18,20],select:[2,9,15],self:[3,5,11,13,15,18,20],semant:[2,3,14],send:[10,20],sensor:[10,11,17,20],sensor_id:10,sent:[16,20],sentiment:[11,20],separ:[14,15,20],seq:[10,11],sequenc:[10,11,17,18,20],seri:20,server:[6,16],serveruri:16,servic:[1,3,4,6,14,15,16,18,20],service_nam:[4,15,18],session:4,set:[0,2,3,5,6,10,11,13,15,17,18,19,20],setproperti:[0,2],setup:[1,18],setup_distribut:18,setup_standalon:18,setup_streaming_analyt:18,share:[0,2],should:[11,16,18,20],show:11,shutdown:[2,9,14],side:18,sign:3,signatur:11,similar:11,simpl:[3,10,16,18,20],simpli:[0,2],sinc:[13,15,20],singl:[3,6,10,11,14,16,17,20],sink:[10,11,20],situat:20,size:[6,16,20],skip:18,slide:20,sms:14,some:[6,11,20],sound:20,sourc:[0,2,10,11,14,15,16,18,20],spars:11,specif:[0,2,4,6,10,15,16,17,20],specifi:[4,6,11,14,15,16,18,20],spl:[1,3,6,14,15,17],spl_json:[10,17],spldoc:11,sploper:10,spp:11,src:16,sscrju_4:20,ssl:[4,16],standalon:[1,2,15,18,20],standalone_bundl:15,standard:[0,2,3,4,10,11],standbi:6,start:[4,6,11,14,17,20],start_data_fetch:[6,20],start_inst:6,startedbi:6,startswith:20,starttim:6,state:[2,3,4,9,10,14,16],stateless:11,statu:[4,6,18],statusreason:6,stdout:20,step:20,stop:[4,6,11,18,20],stop_data_fetch:[6,20],stop_inst:6,store:[3,6,13],str:[3,4,6,10,12,15,17,18,19,20],stream:[1,3,6,10,11,14,15,16,17,18],streaming_analyt:18,streaming_analytics_servic:[15,18],streaming_analytics_service_nam:[4,18],streaminganalyticsconnect:[4,6],streaminganalyticsservic:[4,6],streamnam:6,streams_connect:[15,18],streams_domain_id:[15,18],streams_instal:[15,18],streams_instance_id:[15,18],streams_zkconnect:[15,18],streamsadmin:4,streamschema:[10,17,20],streamsconnect:[4,15,18],streamset:20,streamsqs:4,streamsx:[0,1],streamtool:[0,2,15],streasm:15,strictli:[10,13],string:[3,4,10,14,15,16,17,18,20],strongli:10,structur:[10,17,20],style:[2,9,14],sub:[15,18,20],subclass:19,submis:15,submiss:[2,9,15,18,20],submission_result:18,submissionresult:15,submit:[0,2,3,6,10,11,14,15,17,18,20],submitjob:15,submittim:6,submodul:1,subpackag:1,subscrib:[2,6,16,17,20],subsequ:[15,16,18,20],subset:11,substr:3,suffix:16,suitabl:[11,17,20],sum:20,summar:6,supersed:15,suppli:[3,6,15,20],support:[2,3,10,11,15,17,18,20],suppress:11,synonym:15,syntax:17,system:[3,6,10,15,20],tag:[6,15,20],take:[10,11,18,20],target:15,target_pe_count:15,tcp:16,techniqu:20,telco:14,temp:11,ten:20,term:[11,20],termin:20,test:[3,15,18,19],test_config:18,test_ctxtyp:18,test_filt:18,test_funct:16,test_job_is_healthi:18,test_mqttpublishcli:16,testcas:18,tester:[2,14,19],tester_runtim:[2,14],testfiltermap:18,testlocalcheckexampl:18,testsimplefilt:18,than:[10,11,17,18,20],thei:[10,11,20],thi:[0,2,3,4,6,10,11,13,14,15,17,18,20],third:20,those:[10,14,15,20],though:[11,17],thought:20,thousand:[14,20],thread:[6,20],three:[10,17],threshold:11,through:[0,2,3,4,10,18,20],throughput:[14,20],thu:[4,11,13,14,18,20],thursdai:3,time:[3,6,10,11,13,14,15,16,17,18,20],timedelta:20,timeout:16,timestamp:[10,13,17],tmp:16,tool:3,toolkit:[2,9,10,11,15,17,20],top:20,topic1:16,topic:[6,14,16,20],topo:[15,16],topolog:[0,1,2,3,10,12],trace:[6,15],traceback:[11,20],tracinglevel:6,track:20,traffic:20,transform:20,translat:15,transport:17,trigger:20,trust:16,truststor:16,truststorepassword:16,tupl:[0,2,3,6,9,10,13,14,15,16,17,18],tuple_check:18,tuple_count:18,turn:[0,2],tweet:15,two:[6,10,11,13,18,20],type:[2,3,4,6,9,10,14,15,17,18,20],typeerror:20,typic:[3,10,11,15,18,20],uint16:13,uint32:13,uint64:[10,13,20],uint8:13,undefin:20,under:[18,19],underscor:[11,17],unhealthi:[6,18],unicod:[14,20],union:20,uniqu:[6,15,16,19,20],unit:3,unittest:18,univers:3,unix:13,unknown:6,unless:[11,16,18],unpredict:20,until:[18,20],unwant:20,updat:[3,6,20],upon:[10,11,14,18,20],upstream:20,uri:16,url:[3,4],usag:13,use:[0,2,3,4,10,11,13,15,16,18,20],used:[0,2,3,6,9,10,11,13,14,15,16,17,18,20],useful:11,user1id:16,user1passwrd:16,user:[4,6,14,15,20],userid:16,usernam:[4,15,18],uses:[4,10,16,19,20],using:[0,2,3,4,10,11,13,14,15,17,18,20],usual:10,utc:[3,13],utcfromtimestamp:13,utf:14,util:10,val:20,valid:[10,11,14,18,19],valu:[3,4,6,10,11,13,14,15,16,17,18,20],valueerror:[3,4,6],var_keyword:11,var_posit:11,variabl:[0,2,3,4,15,18,20],variat:13,varieti:11,vcap:[4,15,18],vcap_servic:[4,15,18],vehicl:17,vehicleloc:17,veri:[14,20],verif:4,verifi:[4,18],version:[6,15,20],view:[0,2,4,5,6,15,20],viewitem:6,viewnotfounderror:5,visibl:20,voic:14,voltag:11,wai:10,wait:16,warn:15,well:14,were:13,what:[15,20],when:[0,2,3,5,6,10,11,13,15,16,17,18,19,20],where:[3,6,10,11,14,17,18,20],whether:[6,15],which:[4,6,10,14,15,18,20],whose:[4,11,20],width:[3,20],wild:14,wildcard:14,win:20,window:20,window_typ:20,with_traceback:5,within:[0,2,3,6,15,17,19,20],without:[10,14,15,16,18,20],woohoo:16,word:[15,20],work:[14,18],world:[18,20],would:[10,11,14],wrap:[4,11],wrapper:4,written:14,www:[0,2,20],x86_64:15,xml:17,yet:[11,17,20],yield:18,you:4,your:[3,4,20],zero:[3,11,14,17,20],zip:[10,11],zipcod:10,zookeep:[15,18]},titles:["IBM Streams Python support","packages","streamsx package","streamsx.ec module","streamsx.rest module","streamsx.rest_errors module","streamsx.rest_primitives module","streamsx.scripts package","streamsx.scripts.streamsx-runner module","streamsx.spl package","streamsx.spl.op module","streamsx.spl.spl module","streamsx.spl.toolkit module","streamsx.spl.types module","streamsx.topology package","streamsx.topology.context module","streamsx.topology.mqtt module","streamsx.topology.schema module","streamsx.topology.tester module","streamsx.topology.tester_runtime module","streamsx.topology.topology module"],titleterms:{"class":11,"function":[0,2,11],analyt:[0,2,4],api:[0,2,4],applic:[0,2],attribut:11,callabl:20,claus:10,content:[2,7,9,14],context:[3,15],dictionari:11,distribut:3,execut:3,from:11,ibm:[0,2],indic:0,initi:[11,20],invok:10,list:11,microservic:14,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],mqtt:16,name:11,none:11,oper:[0,2,10,11,20],output:10,overview:[3,11,14,20],packag:[1,2,7,9,14],param:10,pass:11,posit:11,premis:[0,2],process:[11,20],publish:14,python:[0,2,11],rest:[0,2,4],rest_error:5,rest_primit:6,runner:8,schema:17,script:[7,8],select:11,semant:20,servic:[0,2],setup:[0,2],shutdown:[11,20],spl:[0,2,9,10,11,12,13,20],standalon:3,state:[11,20],stream:[0,2,4,20],streamsx:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],style:11,submiss:11,submodul:[2,7,9,14],subpackag:2,subscrib:14,support:0,tabl:0,tester:18,tester_runtim:19,toolkit:12,topolog:[14,15,16,17,18,19,20],tupl:[11,20],type:13}})