import InfoImage from '@assets/info.svg';
import PriceImage from '@assets/price.svg';
import StarImage from '@assets/star.svg';
import WishlistImage from '@assets/wishlist.svg';
import {Button} from 'components/Button';
import {Image} from 'components/Image';
import {Skeleton} from 'components/Skeleton';
import {Text} from 'components/Text';
import {BackgroundImageLayout} from 'layout/BackgroundImageLayout';
import {BasicLayout} from 'layout/BasicLayout';
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, Linking, View, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {BorderRadiusEnum, MarginEnum, PaddingEnum} from 'styles/Spacer';
import {
  checkFavoriteById,
  fetchAllFavoriteProducts,
  fetchAllProducts,
  uncheckFavoriteById,
} from '../services/retrieveData';
import {BottomTab} from 'components/BottomTab';
import {ColorBaseEnum} from 'styles/Colors';
import WishlistMarkImage from '@assets/Wishlist-Mark.svg';
import DoubleClick from 'react-native-double-click';

const EmptyCardRecomended = () => {
  return (
    <>
      <Skeleton.Thumbnail />
      <Skeleton.Thumbnail marginLeft={MarginEnum['2x']} />
    </>
  );
};

const ShopPage = (props) => {
  const [stateProducts, setStateProducts] = useState([]);
  const [stateFavoriteProducts, setStateFavoriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const getAllFavoriteProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetchAllFavoriteProducts();
      if (res) {
        setIsLoading(false);
        setStateFavoriteProducts(res.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('@error', error.message);
    } finally {
      setIsLoading(false);
    }
  });

  const getAllProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetchAllProducts();
      if (res) {
        setIsLoading(false);
        setStateProducts(res.page.edges);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('@error', error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllProduct();
    getAllFavoriteProduct();
  }, []);

  const handleOrderNow = (valueLink) => {
    props.navigation.navigate('OrderWebViewPage', {param: valueLink});
  };

  const handlePressUncheck = async (id) => {
    setIsLoading(true);
    try {
      const res = await uncheckFavoriteById(id);
      if (res) {
        getAllProduct();
        getAllFavoriteProduct();
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const handlePressCheck = async (id) => {
    setIsLoading(true);
    try {
      const res = await checkFavoriteById(id);
      if (res) {
        getAllProduct();
        getAllFavoriteProduct();
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <BackgroundImageLayout source={require('assets/background-gradient.jpg')}>
      <Row
        shadowColor={ColorBaseEnum.black}
        shadowOffset={{
          width: 0,
          height: 2,
        }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
        paddingHorizontal={PaddingEnum['4x']}
        paddingVertical={PaddingEnum['2x']}
        backgroundColor="white">
        <Col>
          <Image
            source={require('assets/avatar.jpg')}
            height={54}
            width={54}
            borderRadius={BorderRadiusEnum['wide']}
          />
        </Col>
        <Col marginLeft={MarginEnum['2x']}>
          <Text variant="p-small" label="Good morning!" />
          <Text variant="h3-bold" label="Wahyu Fatur Rizki" />
        </Col>
      </Row>

      <BasicLayout>
        <Text
          marginVertical={MarginEnum['2x']}
          variant="p-small"
          label={
            isLoading
              ? 'Loading...'
              : `${stateProducts.length} products sorted by price`
          }
        />
        <FlatList
          ListEmptyComponent={EmptyCardRecomended}
          data={isLoading ? [] : stateProducts}
          keyExtractor={({node}) => {
            return node.id;
          }}
          contentContainerStyle={{
            paddingBottom: PaddingEnum['4x'],
          }}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: MarginEnum['2x']}} />
          )}
          renderItem={({item, index}) => (
            <CardRecomended
              loading={isLoading}
              {...item}
              stateFavoriteProducts={stateFavoriteProducts}
              key={index}
              handlePressUncheck={(id) => handlePressUncheck(id)}
              handlePressCheck={(id) => handlePressCheck(id)}
              onPressOrderNow={(link) => handleOrderNow(link)}
              onPress={() => {}}
            />
          )}
        />
      </BasicLayout>
      <BottomTab {...props} />
    </BackgroundImageLayout>
  );
};

const CardRecomended = (props) => {
  const {
    apiFeaturedImage: imageProduct,
    brand,
    name,
    tagList,
    price,
    category,
    rating,
    productLink,
    id,
  } = props.node;
  return (
    <DoubleClick onClick={() => props.handlePressCheck(id)}>
      <View
        style={{
          backgroundColor: '#F5F5F5',
          borderRadius: BorderRadiusEnum['2x'],
          height: 420,
          width: '100%',
          padding: 10,
          marginRight: MarginEnum['2x'],
        }}>
        <BackgroundImageLayout
          source={{
            uri: `https:${imageProduct}`,
          }}
          imageStyle={{
            borderTopRightRadius: BorderRadiusEnum['2x'],
            borderTopLeftRadius: BorderRadiusEnum['2x'],
          }}
          resizeMode="contain"
          padding={PaddingEnum['2x']}
          justifyContent="flex-start"
          height={200}>
          <Row>
            <Col size={5}>
              <Text
                backgroundColor={'#F1F1F1'}
                paddingHorizontal={6}
                paddingVertical={3}
                borderRadius={6}
                opacity={0.7}
                textAlign="center"
                label={brand}
                variant="p-small"
              />
            </Col>

            <Col size={5} alignItems="flex-end">
              {props.stateFavoriteProducts.includes(id) ? (
                <TouchableOpacity onPress={() => props.handlePressUncheck(id)}>
                  <WishlistMarkImage />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => props.handlePressCheck(id)}>
                  <WishlistImage />
                </TouchableOpacity>
              )}
            </Col>
          </Row>
        </BackgroundImageLayout>
        <View>
          <Text
            marginBottom={MarginEnum['0.5x']}
            variant="h3-bold"
            label={name}
          />
          <Row marginBottom={MarginEnum['0.5x']} flexWrap="wrap">
            {tagList.map((tagListData, tagListDataIndex) => {
              return (
                <Col marginRight={MarginEnum['0.5x']} key={tagListDataIndex}>
                  <Text
                    marginBottom={MarginEnum['0.5x']}
                    variant="p-small"
                    label={`${tagListData},`}
                  />
                </Col>
              );
            })}
          </Row>

          <Row>
            <Col marginRight={MarginEnum['0.5x']}>
              <StarImage />
            </Col>
            <Col marginRight={MarginEnum['2x']}>
              <Text
                marginBottom={MarginEnum['0.5x']}
                variant="p-small"
                label={rating || 'N/A'}
              />
            </Col>
            <Col marginRight={MarginEnum['0.5x']}>
              <PriceImage />
            </Col>
            <Col>
              <Text
                marginBottom={MarginEnum['0.5x']}
                variant="p-small"
                label={price}
              />
            </Col>
          </Row>

          <Row>
            <Col marginRight={MarginEnum['0.5x']}>
              <InfoImage />
            </Col>
            <Col>
              <Text
                marginBottom={MarginEnum['0.5x']}
                variant="p-small"
                label={category}
              />
            </Col>
          </Row>

          <Row>
            <Col size={5} marginRight={5}>
              <Button.Normal
                onPress={() => Linking.openURL(productLink)}
                variant="secondary"
                label="View brand"
              />
            </Col>
            <Col size={5} marginLeft={5}>
              <Button.Normal
                onPress={() => props.onPressOrderNow(productLink)}
                label="Order now"
              />
            </Col>
          </Row>
        </View>
      </View>
    </DoubleClick>
  );
};

export default ShopPage;
