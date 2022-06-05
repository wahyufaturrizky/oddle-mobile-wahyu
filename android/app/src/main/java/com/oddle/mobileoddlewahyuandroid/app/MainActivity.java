// ./android/app/src/main/java/

/* NOTE: create a directory according to your package name
 * example: An android package name like, 'com.mycompany.sub.app'
 * will turn into 'com/mycompany/sub/app'
 * Now, manually create/put MainActivity.java under './android/app/src/main/java/com/mycompany/sub/app/'
*/

package com.oddle.mobileoddlewahyuandroid.app;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
  }
  
  @Override
  protected String getMainComponentName() {
    return "mobileoddlewahyuandroid";
  }

  
}
