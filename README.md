# Machine-Learning-Exoplanet-Classification

### Method & Results

The first model was a binary classifier using logistic regression. The model yielded predictive accuracy of approximately .664 on the testing data.
After scaling the X values (using MinMaxScaler), the model yielded a far-improved predictive accuracy of .837.

A Support Vector Machine (SVM) did better, with an accuracy score of .847.

After tuning hyperparameters C and Gamma using Gridsearch, the best model I tested had C=10, and Gamma = .01, with a predictive accuracy of .870.

A deep-learning model, using the adam optimizer, and a categorical crossentropy loss function, with 100 inut layers, 100 intermediate layers, and 3 output layers was trained, and subsequently achieved a predictive accuracy score of .876 on the test data. 

### Conclusions

It appears that a simple logistic regression with MinMax Scaled data for the X matrix is the most time-efficient classifier. However, more complicated, compute-intensive ML models can be used to slightly improve predictive accuracy.
