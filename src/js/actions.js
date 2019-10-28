import * as activeTypes from './activeTypes';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseRef from './firebase.config'

const isLoading = () => ({
  type: activeTypes.IS_LODING,
});

const isSignIn = () => ({
  type: activeTypes.IS_SIGNIN,
});

const isSignOut = () => ({
  type: activeTypes.IS_SIGNOUT,
});

const isDay = data => ({
  type: activeTypes.IS_DAY,
  data
});

const getAuthStateSuccess = data => ({
  type: activeTypes.GET_UID_SUCCESS,
  data,
});

const editDone = () => ({
  type: activeTypes.EDIT_DONE,
});

const getFirePostSuccess = data => ({
  type: activeTypes.GET_POST_SUCCESS,
  data
});

const getFirePostsSuccess = data => ({
  type: activeTypes.GET_POSTS_SUCCESS,
  data
});

const getTagsSuccess = data => ({
  type: activeTypes.GET_TAGS_SUCCESS,
  data
});

const uptFirePostSuccess = data => ({
  type: activeTypes.UPDATE_POST_SUCCESS,
  data
});

const addFirePostSuccess = data => ({
  type: activeTypes.ADD_POST_SUCCESS,
  data
});

const DeleteFirePostSuccess = () => ({
  type: activeTypes.DELETE_POST_SUCCESS,
});


export const handleGetSearchCategorys = keyword => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.orderByChild('category').equalTo(keyword).on('value', snapshot => {
      dispatch(getFirePostsSuccess(snapshot.val()));
    });
  }
};

export const handleGetSearchTags = tags => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.on('value', snapshot => {
      const result = [];
      snapshot.forEach(childSnapshot => {
        if (childSnapshot.val().tagArr !== undefined && childSnapshot.val().tagArr.includes(tags)) {
          result.push(childSnapshot.val());
        }
      })
      dispatch(getFirePostsSuccess(result));
    });
  }
};

export const handleGetFirePosts = () => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.orderByChild('sort').on('value', snapshot => {
      const dataList = [];
      snapshot.forEach(i => {
        dataList.push(i.val())
      })
      dispatch(getFirePostsSuccess(dataList));
    });
  }
};

export const handleGetFirePost = date => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.orderByChild('date').equalTo(Number(date)).once('value', snapshot => {
      const data = [];
      snapshot.forEach(i => {
        data.push(i.val())
      })
      dispatch(getFirePostSuccess(data[0]));
    });
  }
};

export const handleGetTags = () => {
  return function(dispatch) {
    firebaseRef.on('value', snapshot => {
      const tagGroup = [];
      let tagSet = [];
      Object.values(snapshot.val()).map(e => {
        if (e.tagArr !== undefined) {
          tagGroup.push(e.tagArr)
        }
      })
      const flattenedTag = tagGroup.reduce(
        (accumulator, currentValue ) => accumulator.concat(currentValue),
        []
      );
      tagSet = [...new Set(flattenedTag)];
      tagSet.sort();

      dispatch(getTagsSuccess(tagSet));
    });
  }
};

export const handleUpdateFirePost = (id, newData) => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.child(id).set(newData, () => {
        dispatch(uptFirePostSuccess(newData));
    });
  }
};

export const handleAddFirePost = (newData, timestamp) => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.child(timestamp).set({
        ...newData,
        date: timestamp,
        sort: (timestamp) * (-1),
      }, () => {
        dispatch(addFirePostSuccess(newData));
    });
  }
};

export const handleDeleteFirePost = date => {
  return function(dispatch) {
    dispatch(isLoading());
    firebaseRef.orderByChild('date').equalTo(Number(date)).once('child_added', snapshot => {
      snapshot.ref.remove();
      alert('Delete Success!');
      dispatch(DeleteFirePostSuccess());
    });
  }
};

export const handleSignIn = () => {
  return function(dispatch) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
};

export const handleSignOut = () => {
  return function(dispatch) {
    firebase.auth().signOut();
  }
};


// 偵測有沒有登入
export const handleAuthState = () => {
  return function(dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('users/' + user.uid).set({
          username: user.displayName,
          email: user.email,
          profile_picture : user.photoURL,
        });
        dispatch(isSignIn());
      } else {
        dispatch(isSignOut());
      }
    });
  }
};

// 偵測 登入者訊息
export const handleGetAuthState = () => {
  return function(dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(getAuthStateSuccess(user.uid));
      }
    });
  }
};


// 按讚
export const handletoggleHeart = (id, firePost, newArr) => {
  return function(dispatch) {
    firebaseRef.child(id).set({
      ...firePost,
      heartCount: newArr,
    });
  }
};

// 護眼模式
export const handleDayToggle = data => {
  return function(dispatch) {
    dispatch(isDay(data));
  }
};