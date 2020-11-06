URLS=[
"client/api/index.html",
"client/api/user.html",
"client/api/teams.html",
"client/api/dp_object.html",
"client/api/runtime.html",
"client/api/common.html",
"client/api/report.html"
];
INDEX=[
{
"ref":"datapane.client.api",
"url":0,
"doc":" API docs for Datapane Client These objects are all available under the  datapane module, via  import datapane as dp (they are re-exported from  datapane.client.api ).  Datapane Reports API The core reporting APIs are available on both the public and teams plans, these are found in  datapane.client.api.report , including, -  datapane.client.api.report.Report -  datapane.client.api.report.Blocks -  datapane.client.api.report.Plot -  datapane.client.api.report.Table -  datapane.client.api.report.Markdown -  datapane.client.api.report.File  Datapane Teams Additional API docs for teams and enterprise features are found in  datapane.client.api.teams that provide automation and sharing of data analytics workflows -  datapane.client.api.teams.Blob -  datapane.client.api.teams.Variable -  datapane.client.api.teams.Script -  datapane.client.api.teams.Schedule  note These docs represent the latest version of the datapane API available on [pypi](https: pypi.org/project/datapane/)    "
},
{
"ref":"datapane.client.api.user",
"url":1,
"doc":" Datapane User API User management functions, including authentication It's possible to authenticate within Python, however we also provide (and recommend) authenticating via the CLI, as it's easier to script,   $ datapane login  token  . $ datapane logout  "
},
{
"ref":"datapane.client.api.user.login",
"url":1,
"doc":"Login to the specified Datapane Server, storing the token within a config-file called  env for future use Args: token: Token to use when logging in server: Datapane Server to connect to (default: Datapane Public at https: datapane.com/) env: The environment profile to store these login details to (default:  default ) cli_login: Toggle if this login is occuring via the CLI (optional)  note Can also be ran via CLI as  \"datapane login\" ",
"func":1
},
{
"ref":"datapane.client.api.user.logout",
"url":1,
"doc":"Logout from Datapane Server, removing local credentials Args: env: Environment profile to logout from  note Can also be ran via CLI as  \"datapane logout\" ",
"func":1
},
{
"ref":"datapane.client.api.teams",
"url":2,
"doc":" Datapane Teams API Datapane Teams includes features to automate your Python workflows and easily build and share data-driven apps and results with your teams. Generally objects are created on the server via the static methods (rather than the constructor), and the instance methods and fields are used to access values (e.g.  .name ) and behaviour (e.g.  delete() ) on already existing object. Objects can be looked up by name using  .get() and by id using  .by_id() .  note The objects in this module are available on the Teams Plan"
},
{
"ref":"datapane.client.api.teams.Blob",
"url":2,
"doc":"Blobs are files that can be uploaded and downloaded for use in your scripts, for instance trained models, datasets, and (pickled) Python objects. They are generally large, but can be any size. Attributes: content_type: the blob content-type size_bytes: the blob size num_rows: number of rows in the file (if a dataframe) num_colums: number of colums in the file (if a dataframe) cells: number of cells in the file (if a dataframe)  tip Use the static methods to create  Blobs rather than the constructor"
},
{
"ref":"datapane.client.api.teams.Blob.upload_df",
"url":2,
"doc":"Create a blob containing the dataframe provided Args: df: The pandas dataframe to upload as a Blob Returns: An instance of the created  Blob object",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.upload_file",
"url":2,
"doc":"Create a blob containing the contents of the file provided Args: fn: Path to the file to upload as a Blob Returns: An instance of the created  Blob object",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.upload_obj",
"url":2,
"doc":"Create a blob containing the contents of the Python object provided, the object may be pickled or converted to JSON before storing. Args: data: Python object to upload as a Blob as_json: Convert the data to JSON rather than pickling (optional) Returns: An instance of the created  Blob object",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.download_df",
"url":2,
"doc":"Download the blob and return it as a Dataframe Returns: A pandas dataframe generated from the blob",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.download_file",
"url":2,
"doc":"Download the blob to the file provided Args: fn: Path representing the location to save the file",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.download_obj",
"url":2,
"doc":"Download the blob and return it as a Python object Returns: The object created by deserialising the Blob (either via Pickle or JSON decoding)",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.get",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its name Args: name: The name of the object, e.g.  my-blob 3 owner: The owner of the object, e.g.  fred version: The version of the object (optional, defaults to latest) Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.by_id",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its id Args: id_or_url: The  id , or full URL that represents the object Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.refresh",
"url":3,
"doc":"Refresh the object with the latest data from the Datapane Server",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.delete",
"url":3,
"doc":"Delete the object on the server",
"func":1
},
{
"ref":"datapane.client.api.teams.Blob.list",
"url":3,
"doc":"Returns: A list of the Datapane objects of this type that are owned by the user",
"func":1
},
{
"ref":"datapane.client.api.teams.Variable",
"url":2,
"doc":"User Variables represent secure pieces of data, such as tokens, database connection strings, etc. that are needed inside your scripts  tip Use the static methods to create  Variables rather than the constructor Attributes: name: Name of the variable value: Value of the variable"
},
{
"ref":"datapane.client.api.teams.Variable.list_fields",
"url":2,
"doc":""
},
{
"ref":"datapane.client.api.teams.Variable.create",
"url":2,
"doc":"Args: name: Name of the variable value: Value of the variable visibility: one of  \"PUBLIC\" ,  \"ORG\" , or  \"PRIVATE\" (optional) Returns: An instance of the created  Variable object",
"func":1
},
{
"ref":"datapane.client.api.teams.Variable.get",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its name Args: name: The name of the object, e.g.  my-blob 3 owner: The owner of the object, e.g.  fred version: The version of the object (optional, defaults to latest) Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Variable.by_id",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its id Args: id_or_url: The  id , or full URL that represents the object Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Variable.refresh",
"url":3,
"doc":"Refresh the object with the latest data from the Datapane Server",
"func":1
},
{
"ref":"datapane.client.api.teams.Variable.delete",
"url":3,
"doc":"Delete the object on the server",
"func":1
},
{
"ref":"datapane.client.api.teams.Variable.list",
"url":3,
"doc":"Returns: A list of the Datapane objects of this type that are owned by the user",
"func":1
},
{
"ref":"datapane.client.api.teams.Script",
"url":2,
"doc":"Scripts allow users to build, deploy, and automate data-driven Python workflows and apps to their cloud that can be customised and run by other users.  tip We recommend using either the Web UI or CLI, e.g.  datapane script deploy / run /  . to work with scripts rather than using the low-level API"
},
{
"ref":"datapane.client.api.teams.Script.get",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its name Args: name: The name of the object, e.g.  my-blob 3 owner: The owner of the object, e.g.  fred version: The version of the object (optional, defaults to latest) Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Script.by_id",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its id Args: id_or_url: The  id , or full URL that represents the object Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Script.refresh",
"url":3,
"doc":"Refresh the object with the latest data from the Datapane Server",
"func":1
},
{
"ref":"datapane.client.api.teams.Script.delete",
"url":3,
"doc":"Delete the object on the server",
"func":1
},
{
"ref":"datapane.client.api.teams.Script.list",
"url":3,
"doc":"Returns: A list of the Datapane objects of this type that are owned by the user",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule",
"url":2,
"doc":"Runs represent the running of a script, indicating their status, output, errors, etc.  tip We recommend using the CLI, e.g.  datapane schedule create /  . to work with schedules rather than the low-level API"
},
{
"ref":"datapane.client.api.teams.Schedule.list_fields",
"url":2,
"doc":""
},
{
"ref":"datapane.client.api.teams.Schedule.create",
"url":2,
"doc":"",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule.update",
"url":2,
"doc":"",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule.get",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its name Args: name: The name of the object, e.g.  my-blob 3 owner: The owner of the object, e.g.  fred version: The version of the object (optional, defaults to latest) Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule.by_id",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its id Args: id_or_url: The  id , or full URL that represents the object Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule.refresh",
"url":3,
"doc":"Refresh the object with the latest data from the Datapane Server",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule.delete",
"url":3,
"doc":"Delete the object on the server",
"func":1
},
{
"ref":"datapane.client.api.teams.Schedule.list",
"url":3,
"doc":"Returns: A list of the Datapane objects of this type that are owned by the user",
"func":1
},
{
"ref":"datapane.client.api.runtime",
"url":4,
"doc":" Script runtime API Runtime API used when running a Datapane Script  note The objects in this module are available on the Teams Plan"
},
{
"ref":"datapane.client.api.common",
"url":5,
"doc":" Common objects Common/shared objects and types used throughout the client API  note This module is not used directly"
},
{
"ref":"datapane.client.api.report",
"url":6,
"doc":"Datapane Reports API This includes the APIs for the  Blocks that make up a  Report and APIs for saving and pblishing them."
},
{
"ref":"datapane.client.api.report.ReportBlock",
"url":6,
"doc":"Base Block class - subclassed by all Block types  note The class is not used directly. Args: id: A unique id to reference the block, used when querying blocks via XPath to aid embedding"
},
{
"ref":"datapane.client.api.report.ReportBlock.id",
"url":6,
"doc":""
},
{
"ref":"datapane.client.api.report.Blocks",
"url":6,
"doc":"Block objects act as a container that hold a list of nested Blocks object, such as Tables, Plots, etc - they may even hold Blocks themselves recursively. Blocks are used to provide a grouping for blocks can have layout options applied to them Args:  arg_blocks: Blocks to add to report blocks: Allows providing the report blocks as a single list id: A unique id for the blocks to aid querying (optional) rows: Display the contained blocks, e.g. Plots, using _n_ rows columns: Display the contained blocks, e.g. Plots, using _n_ columns  tip Blocks can be passed using either arg parameters or the  blocks kwarg, e.g.  dp.Blocks(plot, table, columns=2) or  dp.Blocks(blocks=[plot, table], columns=2) "
},
{
"ref":"datapane.client.api.report.Blocks.blocks",
"url":6,
"doc":""
},
{
"ref":"datapane.client.api.report.Markdown",
"url":6,
"doc":"Markdown objects store Markdown text that can be displayed as formatted text when viewing your report  note This object is also available as  dp.Text Args: text: The markdown formatted text, use triple-quotes, (  \" My Title \" ) to create multi-line markdown text id: A unique id for the block to aid querying (optional)"
},
{
"ref":"datapane.client.api.report.Markdown.text",
"url":6,
"doc":""
},
{
"ref":"datapane.client.api.report.File",
"url":6,
"doc":"File blocks are used to attach a file to the report that can be displayed (if possible) and downloaded by report viewers Any types of files may be attached, for instance, images (png / jpg), PDFs, JSON data, Excel files, etc. Args: data: A python object to attach to the report (e.g. a dictionary) file: Path to a file to attach to the report (e.g. a JPEG image) is_json: If  True , treat the  data as JSON data already can_download: Allow users to download the file when viewing the report name: Name to be used when downloading the file id: A unique id for the block to aid querying (optional)  note either  data or  file must be provided"
},
{
"ref":"datapane.client.api.report.File.file",
"url":6,
"doc":""
},
{
"ref":"datapane.client.api.report.Plot",
"url":6,
"doc":"Plot blocks store a Python-based plot object, including ones created by Altair, Plotly, Matplotlib, Bokeh, and Folium, for interactive display in your report when viewed in the browser. Args: data: The  plot object to attach caption: A caption to display below the plot (optional) id: A unique id for the block to aid querying (optional)"
},
{
"ref":"datapane.client.api.report.Plot.caption",
"url":6,
"doc":""
},
{
"ref":"datapane.client.api.report.Table",
"url":6,
"doc":"Table blocks store a dataframe that can be viewed and filtered by users viewing your report, and downloaded by them as a CSV or Excel file. Args: df: The pandas dataframe to attach to the report caption: A caption to display below the plot (optional) can_pivot: Is the table pivotable (not yet supported) id: A unique id for the block to aid querying (optional)  hint  can_pivot is currently unsupported and can be ignored"
},
{
"ref":"datapane.client.api.report.Table.caption",
"url":6,
"doc":""
},
{
"ref":"datapane.client.api.report.Report",
"url":6,
"doc":"Reports collate plots, text, tables, and files into an interactive report that can be analysed and shared by users in their Browser Args:  arg_blocks: Blocks to add to report blocks: Allows providing the report blocks as a single list full_width: Set to  True to increase the report width, for instance when creating a dashboard Returns: A  Report object that can be published, saved, etc.  tip Blocks can be passed using either arg parameters or the  blocks kwarg, e.g.  dp.Report(plot, table) or  dp.Report(blocks=[plot, table]) "
},
{
"ref":"datapane.client.api.report.Report.full_width",
"url":6,
"doc":"When set, the report is full-width suitable for use in a dashboard"
},
{
"ref":"datapane.client.api.report.Report.publish",
"url":6,
"doc":"Publish the report, including its attached assets, to the logged-in Datapane Server. Args: name: The report name - can include spaces, caps, symbols, etc., e.g. \"Profit & Loss 2020\" description: A high-level description for the report, this is displayed in searches and thumbnails source_url: A URL pointing to the source code for the report, e.g. a GitHub repo or a Colab report visibility: one of  \"PUBLIC\" _(default on Public)_,  \"UNLISTED\" ,  \"ORG\" _(Teams only)_, or  \"PRIVATE\" _(Teams only)_ open: Open the file in your browser after creating tags: A list of tags (as strings) used to categorise your report tweet: Open twitter to tweet your published report - can customise the tweet by passing the message in as this parameter",
"func":1
},
{
"ref":"datapane.client.api.report.Report.save",
"url":6,
"doc":"Save the report to a local HTML file Args: path: location to save the HTML file open: Open the file in your browser after creating standalone: Create a fully standalone HTML report with no external/network dependencies _(this can result in large files)_",
"func":1
},
{
"ref":"datapane.client.api.report.Report.preview",
"url":6,
"doc":"Preview the report inside your currently running Jupyter notebook Args: width: Width of the report preview in Jupyter (default: 600) height: Height of the report preview in Jupyter (default: 500)",
"func":1
},
{
"ref":"datapane.client.api.report.Report.get",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its name Args: name: The name of the object, e.g.  my-blob 3 owner: The owner of the object, e.g.  fred version: The version of the object (optional, defaults to latest) Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.report.Report.by_id",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its id Args: id_or_url: The  id , or full URL that represents the object Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.report.Report.refresh",
"url":3,
"doc":"Refresh the object with the latest data from the Datapane Server",
"func":1
},
{
"ref":"datapane.client.api.report.Report.delete",
"url":3,
"doc":"Delete the object on the server",
"func":1
},
{
"ref":"datapane.client.api.report.Report.list",
"url":3,
"doc":"Returns: A list of the Datapane objects of this type that are owned by the user",
"func":1
},
{
"ref":"datapane.client.api.dp_object",
"url":3,
"doc":" Base classes The base classes used by all Datapane objects stored on the Datapane Server and accessible by the client API  note This module is not used directly"
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef",
"url":3,
"doc":"Abstract class used to reference core Datapane server objects - not used directly."
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.endpoint",
"url":3,
"doc":""
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.res",
"url":3,
"doc":""
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.list_fields",
"url":3,
"doc":""
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.dto",
"url":3,
"doc":""
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.has_dto",
"url":3,
"doc":""
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.url",
"url":3,
"doc":""
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.get",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its name Args: name: The name of the object, e.g.  my-blob 3 owner: The owner of the object, e.g.  fred version: The version of the object (optional, defaults to latest) Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.by_id",
"url":3,
"doc":"Lookup and retrieve an object from the Datapane Server by its id Args: id_or_url: The  id , or full URL that represents the object Returns: The version of the object if found",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.post_with_files",
"url":3,
"doc":"",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.post",
"url":3,
"doc":"",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.refresh",
"url":3,
"doc":"Refresh the object with the latest data from the Datapane Server",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.delete",
"url":3,
"doc":"Delete the object on the server",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.update",
"url":3,
"doc":"",
"func":1
},
{
"ref":"datapane.client.api.dp_object.DPObjectRef.list",
"url":3,
"doc":"Returns: A list of the Datapane objects of this type that are owned by the user",
"func":1
},
{
"ref":"datapane.client.api.dp_object.UploadableObjectMixin",
"url":3,
"doc":""
}
]