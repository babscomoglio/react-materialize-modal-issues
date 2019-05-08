import React, { Component } from "react";
import { Modal, Button } from 'react-materialize';
import { Link } from "react-router-dom";

import M from "materialize-css";


class PageOne extends Component {
  render() {
    
    return (
      <>
        <div style={{background: 'purple', padding: '20px', marginBottom: '20px', position: 'fixed', zIndex: '1010', right: '0px'}}><Link to={'/'}style={{ color: 'white' }}>back to Home</Link></div>
        <Modal header="Modal Header" trigger={<Button>Open Modal</Button>}>
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        </Modal>
        
        <div className="wrap-content">
        <h1>Lorem Ipsum</h1>
        <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."<br />
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales interdum est et tincidunt. Proin sed vestibulum lacus. Vivamus imperdiet fermentum mi sed tempus. In interdum neque quis purus rutrum, nec tempor neque egestas. Fusce non diam varius, molestie nulla vel, laoreet turpis. Morbi elementum, lectus at volutpat accumsan, urna nibh fermentum ex, et finibus ex lacus suscipit metus. Quisque quis mauris vitae libero hendrerit imperdiet id sit amet dolor. Aliquam eu est enim. Nulla nec vestibulum massa, at efficitur neque.</p>
        <p>Fusce hendrerit, ligula id ultrices tristique, ligula velit pulvinar elit, vel consequat ante sem ut neque. Sed vehicula pellentesque felis, vitae feugiat elit vehicula nec. Nam placerat imperdiet ex at rhoncus. In auctor nisl metus, a tincidunt dui sagittis vel. Fusce eget feugiat purus. Duis tristique libero dui, quis facilisis est mollis quis. In bibendum, purus non ullamcorper dapibus, elit felis scelerisque lacus, ut dapibus lorem turpis eu eros. Etiam ultrices lacinia erat at porta. Fusce fermentum eros urna, ut semper sem imperdiet pretium. Vivamus eget feugiat metus, eget dapibus justo. Mauris facilisis sapien purus, vitae consequat sem pulvinar quis. Suspendisse congue neque eget leo tristique, a bibendum lacus mattis. Donec non rutrum nunc. In mattis lectus eget diam pulvinar, sit amet laoreet ligula auctor. Maecenas aliquam, nisl sed gravida ullamcorper, enim risus porttitor nulla, quis semper orci ligula sed tortor. Aliquam erat volutpat.</p>
        <p>Etiam non lacus in velit luctus ullamcorper. Donec arcu nulla, pellentesque non feugiat sit amet, viverra nec elit. Phasellus sit amet dignissim erat. Sed euismod lorem a mauris pellentesque pellentesque. Maecenas mollis, tellus nec tristique commodo, lectus ipsum eleifend dolor, quis porttitor libero lorem id dolor. Nam euismod faucibus felis, ac egestas dolor elementum eu. Maecenas vitae ipsum finibus, posuere risus ut, porta tellus. Nullam ultricies, tellus sit amet suscipit suscipit, sem eros malesuada ante, sed pulvinar erat mi non leo. Proin porta justo erat, sit amet suscipit nibh tristique a. Nam ornare arcu quis enim tristique, vitae varius lorem laoreet. Vestibulum vestibulum id mi ut viverra. Donec vehicula, nunc eu tristique bibendum, enim lorem commodo purus, in luctus dui mauris pretium tortor. In condimentum ligula in magna pulvinar, sit amet consectetur felis scelerisque. Sed imperdiet, leo sed tempor mollis, odio quam faucibus risus, consequat euismod nunc elit ac urna. Aliquam ut velit pulvinar, blandit velit id, lacinia quam. Nulla at congue neque.</p>
        <p>Sed in lectus placerat, placerat velit sed, feugiat nunc. Duis sem arcu, pulvinar eu mi id, viverra congue dolor. Suspendisse potenti. Duis maximus magna et magna vulputate vestibulum. Pellentesque arcu leo, commodo sit amet dui sit amet, mollis pretium lorem. Maecenas quis efficitur velit, sed feugiat sem. Suspendisse potenti. Morbi in ante sed risus vehicula laoreet quis quis justo. In condimentum odio vitae mollis aliquam. Aliquam lacinia nulla non dictum ornare. Integer non neque nisl. Cras in tortor sit amet leo maximus imperdiet.</p>
        <p>Aliquam malesuada luctus nulla, eu facilisis ex faucibus eget. Aliquam erat volutpat. Nullam sagittis ac lorem sit amet tristique. Donec rhoncus lacinia ligula, ac lobortis nunc. Fusce luctus accumsan massa non mollis. Vestibulum feugiat, mi blandit fringilla porttitor, lacus diam commodo enim, at ornare justo eros a tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt quis ipsum nec ultricies.</p>
        <p>Morbi mollis purus placerat lorem sollicitudin, fringilla laoreet ipsum porttitor. Sed interdum aliquam orci id viverra. Nullam id nisl vitae metus bibendum efficitur vel faucibus purus. Fusce condimentum iaculis magna et tristique. In ligula enim, vulputate et magna a, pellentesque ultricies ipsum. Fusce tellus dui, tristique ac lacus vel, viverra ullamcorper ligula. Curabitur porttitor eros in lacus fringilla mollis. Cras tincidunt vel orci vel vehicula.</p>
        <p>Aliquam ligula purus, pellentesque ac orci in, volutpat varius dolor. Aliquam ultricies lectus vitae velit mattis tincidunt. Donec tincidunt nisi nec quam porta vestibulum. Etiam consequat tellus vestibulum felis bibendum, non varius neque pharetra. Sed efficitur accumsan nibh, non bibendum velit rhoncus vel. Morbi tempor ex ac ipsum aliquam, ac malesuada tortor tincidunt. Pellentesque cursus justo sapien, in volutpat risus vehicula porttitor. Sed quam erat, mattis et rutrum ornare, vestibulum dictum ante. Nullam tristique elit ac risus auctor finibus. Etiam nec aliquet elit. Fusce quam libero, pulvinar quis sollicitudin non, hendrerit sit amet magna. Cras sit amet sapien varius, iaculis lectus non, tincidunt nunc. Aenean nec odio mauris. Fusce lobortis elit at leo lobortis finibus. Sed interdum bibendum tempus. Aliquam erat volutpat.</p>
        <p>Proin accumsan, eros eu condimentum posuere, justo massa accumsan velit, sed malesuada felis augue vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi imperdiet vel nibh ut hendrerit. Aliquam erat volutpat. Suspendisse finibus dapibus massa, nec rutrum massa rutrum id. Vestibulum varius est at neque sagittis interdum. Donec est nunc, pharetra vel varius vitae, faucibus lacinia enim. Sed finibus in felis pulvinar luctus. Donec congue rutrum consequat. In elementum vitae tellus vel varius. Vestibulum est risus, tincidunt in laoreet quis, placerat vel mi. Suspendisse lacinia, eros interdum varius convallis, dolor augue molestie lacus, eget consequat lorem lorem at leo. Aenean aliquet enim vitae purus ultricies sollicitudin. Aliquam vestibulum non nunc ac vulputate.</p>
        <p>Sed auctor, mauris et commodo iaculis, risus purus tincidunt mauris, id malesuada nunc magna at massa. Vivamus iaculis efficitur risus ac lacinia. Integer eget tincidunt velit. Morbi tristique turpis urna, at pellentesque sapien elementum luctus. Proin ut justo at est aliquet tempor ac tincidunt libero. Sed nec suscipit mi, id eleifend nunc. Integer in feugiat mauris. Ut eget ligula augue. Aliquam vitae velit sed purus viverra sodales vitae et quam. Curabitur eu sagittis metus. Nullam et ullamcorper orci. Donec nec condimentum nunc, et vehicula lorem.</p>
        <p>Nulla ullamcorper turpis quis dolor luctus, efficitur elementum metus mollis. Proin quis urna quis mauris dapibus luctus. Donec accumsan sodales commodo. Sed ac suscipit urna. Cras sem odio, faucibus ut metus a, tristique lobortis nunc. Mauris egestas ex urna. Aliquam congue suscipit congue. Phasellus lorem libero, molestie a aliquet vitae, molestie nec sem. Curabitur turpis leo, congue sit amet ullamcorper imperdiet, egestas quis neque. </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales interdum est et tincidunt. Proin sed vestibulum lacus. Vivamus imperdiet fermentum mi sed tempus. In interdum neque quis purus rutrum, nec tempor neque egestas. Fusce non diam varius, molestie nulla vel, laoreet turpis. Morbi elementum, lectus at volutpat accumsan, urna nibh fermentum ex, et finibus ex lacus suscipit metus. Quisque quis mauris vitae libero hendrerit imperdiet id sit amet dolor. Aliquam eu est enim. Nulla nec vestibulum massa, at efficitur neque.</p>
        <p>Fusce hendrerit, ligula id ultrices tristique, ligula velit pulvinar elit, vel consequat ante sem ut neque. Sed vehicula pellentesque felis, vitae feugiat elit vehicula nec. Nam placerat imperdiet ex at rhoncus. In auctor nisl metus, a tincidunt dui sagittis vel. Fusce eget feugiat purus. Duis tristique libero dui, quis facilisis est mollis quis. In bibendum, purus non ullamcorper dapibus, elit felis scelerisque lacus, ut dapibus lorem turpis eu eros. Etiam ultrices lacinia erat at porta. Fusce fermentum eros urna, ut semper sem imperdiet pretium. Vivamus eget feugiat metus, eget dapibus justo. Mauris facilisis sapien purus, vitae consequat sem pulvinar quis. Suspendisse congue neque eget leo tristique, a bibendum lacus mattis. Donec non rutrum nunc. In mattis lectus eget diam pulvinar, sit amet laoreet ligula auctor. Maecenas aliquam, nisl sed gravida ullamcorper, enim risus porttitor nulla, quis semper orci ligula sed tortor. Aliquam erat volutpat.</p>
        <p>Etiam non lacus in velit luctus ullamcorper. Donec arcu nulla, pellentesque non feugiat sit amet, viverra nec elit. Phasellus sit amet dignissim erat. Sed euismod lorem a mauris pellentesque pellentesque. Maecenas mollis, tellus nec tristique commodo, lectus ipsum eleifend dolor, quis porttitor libero lorem id dolor. Nam euismod faucibus felis, ac egestas dolor elementum eu. Maecenas vitae ipsum finibus, posuere risus ut, porta tellus. Nullam ultricies, tellus sit amet suscipit suscipit, sem eros malesuada ante, sed pulvinar erat mi non leo. Proin porta justo erat, sit amet suscipit nibh tristique a. Nam ornare arcu quis enim tristique, vitae varius lorem laoreet. Vestibulum vestibulum id mi ut viverra. Donec vehicula, nunc eu tristique bibendum, enim lorem commodo purus, in luctus dui mauris pretium tortor. In condimentum ligula in magna pulvinar, sit amet consectetur felis scelerisque. Sed imperdiet, leo sed tempor mollis, odio quam faucibus risus, consequat euismod nunc elit ac urna. Aliquam ut velit pulvinar, blandit velit id, lacinia quam. Nulla at congue neque.</p>
        <p>Sed in lectus placerat, placerat velit sed, feugiat nunc. Duis sem arcu, pulvinar eu mi id, viverra congue dolor. Suspendisse potenti. Duis maximus magna et magna vulputate vestibulum. Pellentesque arcu leo, commodo sit amet dui sit amet, mollis pretium lorem. Maecenas quis efficitur velit, sed feugiat sem. Suspendisse potenti. Morbi in ante sed risus vehicula laoreet quis quis justo. In condimentum odio vitae mollis aliquam. Aliquam lacinia nulla non dictum ornare. Integer non neque nisl. Cras in tortor sit amet leo maximus imperdiet.</p>
        <p>Aliquam malesuada luctus nulla, eu facilisis ex faucibus eget. Aliquam erat volutpat. Nullam sagittis ac lorem sit amet tristique. Donec rhoncus lacinia ligula, ac lobortis nunc. Fusce luctus accumsan massa non mollis. Vestibulum feugiat, mi blandit fringilla porttitor, lacus diam commodo enim, at ornare justo eros a tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt quis ipsum nec ultricies.</p>
        <p>Morbi mollis purus placerat lorem sollicitudin, fringilla laoreet ipsum porttitor. Sed interdum aliquam orci id viverra. Nullam id nisl vitae metus bibendum efficitur vel faucibus purus. Fusce condimentum iaculis magna et tristique. In ligula enim, vulputate et magna a, pellentesque ultricies ipsum. Fusce tellus dui, tristique ac lacus vel, viverra ullamcorper ligula. Curabitur porttitor eros in lacus fringilla mollis. Cras tincidunt vel orci vel vehicula.</p>
        <p>Aliquam ligula purus, pellentesque ac orci in, volutpat varius dolor. Aliquam ultricies lectus vitae velit mattis tincidunt. Donec tincidunt nisi nec quam porta vestibulum. Etiam consequat tellus vestibulum felis bibendum, non varius neque pharetra. Sed efficitur accumsan nibh, non bibendum velit rhoncus vel. Morbi tempor ex ac ipsum aliquam, ac malesuada tortor tincidunt. Pellentesque cursus justo sapien, in volutpat risus vehicula porttitor. Sed quam erat, mattis et rutrum ornare, vestibulum dictum ante. Nullam tristique elit ac risus auctor finibus. Etiam nec aliquet elit. Fusce quam libero, pulvinar quis sollicitudin non, hendrerit sit amet magna. Cras sit amet sapien varius, iaculis lectus non, tincidunt nunc. Aenean nec odio mauris. Fusce lobortis elit at leo lobortis finibus. Sed interdum bibendum tempus. Aliquam erat volutpat.</p>
        <p>Proin accumsan, eros eu condimentum posuere, justo massa accumsan velit, sed malesuada felis augue vel purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi imperdiet vel nibh ut hendrerit. Aliquam erat volutpat. Suspendisse finibus dapibus massa, nec rutrum massa rutrum id. Vestibulum varius est at neque sagittis interdum. Donec est nunc, pharetra vel varius vitae, faucibus lacinia enim. Sed finibus in felis pulvinar luctus. Donec congue rutrum consequat. In elementum vitae tellus vel varius. Vestibulum est risus, tincidunt in laoreet quis, placerat vel mi. Suspendisse lacinia, eros interdum varius convallis, dolor augue molestie lacus, eget consequat lorem lorem at leo. Aenean aliquet enim vitae purus ultricies sollicitudin. Aliquam vestibulum non nunc ac vulputate.</p>
        <p>Sed auctor, mauris et commodo iaculis, risus purus tincidunt mauris, id malesuada nunc magna at massa. Vivamus iaculis efficitur risus ac lacinia. Integer eget tincidunt velit. Morbi tristique turpis urna, at pellentesque sapien elementum luctus. Proin ut justo at est aliquet tempor ac tincidunt libero. Sed nec suscipit mi, id eleifend nunc. Integer in feugiat mauris. Ut eget ligula augue. Aliquam vitae velit sed purus viverra sodales vitae et quam. Curabitur eu sagittis metus. Nullam et ullamcorper orci. Donec nec condimentum nunc, et vehicula lorem.</p>
        <p>Nulla ullamcorper turpis quis dolor luctus, efficitur elementum metus mollis. Proin quis urna quis mauris dapibus luctus. Donec accumsan sodales commodo. Sed ac suscipit urna. Cras sem odio, faucibus ut metus a, tristique lobortis nunc. Mauris egestas ex urna. Aliquam congue suscipit congue. Phasellus lorem libero, molestie a aliquet vitae, molestie nec sem. Curabitur turpis leo, congue sit amet ullamcorper imperdiet, egestas quis neque. </p>
        </div>
      </>
    );
  }
}

export default PageOne;