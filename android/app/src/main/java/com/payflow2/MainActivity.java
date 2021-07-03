package com.payflow2;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Adicione esse import
import android.os.Bundle; // Adicione esse import

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */

  // Adicione esse método
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "payFlow2";
  }
}
