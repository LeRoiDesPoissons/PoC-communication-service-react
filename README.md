# PoC - Communication service in React

A service which uses a singleton instance to hold current value and notify subscribers of changes to this value through a hook.  
__Important:__ this code is far from production ready and serves merely as a proof of concept which can be further refined to be something useful.

### How does it work

#### Singleton communication service (CommService)
A class which is instaniated as a singleton which holds 'channels' throughout the lifetime of the application.  
Each 'channel' consist of
* *private* holding
  * Value, the current value
  * Subscribers are simple callbacks which are all invoked when the value updates
* *public* getter and setter
  * Getter simply retrieves and returns the value of the holding
  * Setter updates the value of the holding and runs all subscribers  

Apart from the channels the class also has a method to and and one to remove subscribers

#### Hook to communicate between components and service (useComm)
A hook which provides a supersimple interface for components to use, it provides a value and a method to update it.  
Internally it uses a state to provide updates to the component, the update method of this state is hooked in thge subscribers of the communication service, so once those are invokes, the hookstate is updated and the component receives the new value.  
At start it hooks the state update method to the subscribers, and on destroy sends the indetifier to be removed from the subscribers, preventing unused callbacks from being invoked.


### Thing you ideally want to add before using in production
- __Better type support__, currently everything is hardcoded to pass strings, but ideally the typing support more types and the application should be able to determine these itself.
- __Support multichannel__, add multiple channels alongside eachother to support multiple seperate communications
- __Multi-value (history)__, transform (or add option to) value into an arrya of multiple values to allow subscribers to receive multiple previous values
- __Provide stronger safety__, in an effort to keep it as clean and understandable as possible not too many bells and whistles have been added, including checks. 